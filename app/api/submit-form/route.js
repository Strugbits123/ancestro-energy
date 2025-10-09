import { MongoClient } from 'mongodb';
import AWS from 'aws-sdk';
import multer from 'multer';
import multers3 from 'multer-s3';
import { NextResponse } from 'next/server';


const formSchema = {
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'fullName', 'email', 'phone', 'city', 'country', 'projectType',
      'propertyOwner', 'step2', 'projectTypeSelect', 'step3', 'step4',
      'billAmount', 'customSelect', 'createdAt'
    ],
    properties: {
      fullName: { bsonType: 'string', minLength: 1 },
      email: { bsonType: 'string', pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' },
      phone: { bsonType: 'string', minLength: 1 },
      city: { bsonType: 'string', minLength: 1 },
      country: { bsonType: 'string', minLength: 1 },
      projectType: { bsonType: ['string', 'null'] },
      propertyOwner: { bsonType: ['string', 'null'] },
      step2: { bsonType: ['string', 'null'] },
      projectTypeSelect: {
        bsonType: 'array',
        items: { bsonType: 'string' },
        minItems: 1
      },
      step3: {
        bsonType: 'array',
        items: { bsonType: 'string' },
        minItems: 1
      },
      step4: {
        bsonType: 'array',
        items: { bsonType: 'string' }
      },
      billAmount: { bsonType: ['string', 'int', 'double'], minimum: 0 },
      roofPhotoUrl: { bsonType: ['string', 'null'] },
      electricPanelUrl: { bsonType: ['string', 'null'] },
      billUrl: { bsonType: ['string', 'null'] },
      customSelect: { bsonType: 'string', minLength: 1 },
      createdAt: { bsonType: 'date' }
    }
  }
};

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Configure Multer with S3
const upload = multer({
  storage: multers3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, `uploads/${Date.now().toString()}-${file.originalname}`);
    },
  }),
});

// MongoDB connection
const uri = 'mongodb+srv://zainstrugbits_db_user:h1hop3JPWl0nalz7@cluster0.hibobwd.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }
  const db = client.db('form_submissions');
  
  // Check if collection exists, create with validator if it doesn't
  const collections = await db.listCollections({ name: 'ancestro' }).toArray();
  if (collections.length === 0) {
    await db.createCollection('ancestro', {
      validator: formSchema,
      validationLevel: 'strict',
      validationAction: 'error'
    });
  }
  
  return db.collection('ancestro');
}

// API Route Handler
export async function POST(request) {
  try {
    // Create multer middleware for handling multiple files
    const uploadMiddleware = upload.fields([
      { name: 'roofPhoto', maxCount: 1 },
      { name: 'electricPanel', maxCount: 1 },
      { name: 'bill', maxCount: 1 },
    ]);

    // Wrap multer middleware in a promise to use with async/await
    const formData = await new Promise((resolve, reject) => {
      uploadMiddleware(request, null, async (error) => {
        if (error) {
          return reject(error);
        }

        const form = await request.formData();
        const data = {};
        
        // Extract form fields
        for (const [key, value] of form.entries()) {
          if (!['roofPhoto', 'electricPanel', 'bill'].includes(key)) {
            try {
              data[key] = JSON.parse(value);
            } catch {
              data[key] = value;
            }
          }
        }

        // Add file URLs from S3
        if (request.files) {
          data.roofPhotoUrl = request.files.roofPhoto ? request.files.roofPhoto[0].location : null;
          data.electricPanelUrl = request.files.electricPanel ? request.files.electricPanel[0].location : null;
          data.billUrl = request.files.bill ? request.files.bill[0].location : null;
        }

        // Ensure billAmount is a number
        if (data.billAmount) {
          data.billAmount = parseFloat(data.billAmount);
        }

        resolve(data);
      });
    });

    // Connect to MongoDB and insert data
    const collection = await connectToDatabase();
    const result = await collection.insertOne({
      ...formData,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      id: result.insertedId,
    }, { status: 200 });

  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({
      success: false,
      message: 'Error submitting form',
      error: error.message,
    }, { status: 500 });
  }
}

