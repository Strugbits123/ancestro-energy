
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import AWS from "aws-sdk";
import sgMail from "@sendgrid/mail";

// ---- Configure SendGrid ----
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// ---- AWS S3 Config ----
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// ---- MongoDB Setup ----
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }
  const db = client.db( process.env.MONGO_DB_NAME || "ancestro");
  return db.collection("ancestroenergy");
}

// ---- Upload File to S3 ----
async function uploadToS3(file) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const uploadParams = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `uploads/${Date.now()}-${file.name}`,
    Body: buffer,
    ContentType: file.type,
  };

  const { Location } = await s3.upload(uploadParams).promise();
  return Location;
}



export async function sendNotificationEmails(formValues) {
  const {
    fullName = "Unknown",
    email = "Unknown",
    phone = "Unknown",
    city = "Unknown",
    country = "Unknown",
    projectType = "Unknown",
    propertyOwner = "Unknown",
    step2 = "Unknown",
    projectTypeSelect = [],
    step3 = [],
    step4 = [],
    billAmount = "Unknown",
    customSelect = "Unknown",
    roofPhotoUrl = "Unknown",
    electricPanelUrl = "Unknown",
    billUrl = "Unknown",
  } = formValues;

  const formatList = (arr) => (arr && arr.length ? arr.join(", ") : "N/A");

  const adminMsg = {
    to: process.env.ADMIN_EMAIL || process.env.FROM_EMAIL,
    from: process.env.FROM_EMAIL,
    templateId: "d-88af0dba329a472583c201e92310a111", 
    dynamic_template_data: {
      fullName,
      email,
      phone,
      city,
      country,
      projectType,
      propertyOwner,
      currentlyHaveSolar: step2,
      projectTypeSelect: formatList(projectTypeSelect),
      goals: formatList(step3),
      motivations: formatList(step4),
      billAmount: billAmount !== "Unknown" ? `$${billAmount}` : "N/A",
      installationArea: customSelect,
      roofPhotoUrl: roofPhotoUrl || "N/A",
      electricPanelUrl: electricPanelUrl || "N/A",
      billUrl: billUrl || "N/A",
    },
  };

  const clientMsg = {
    to: email,
    from: process.env.FROM_EMAIL,
    templateId: "d-d332299b2f4b43a5b7421e989398d27c", 
    dynamic_template_data: {
      fullName,
      email,
      phone,
      city,
      country,
      projectType,
      propertyOwner,
      currentlyHaveSolar: step2,
      projectTypeSelect: formatList(projectTypeSelect),
      goals: formatList(step3),
      motivations: formatList(step4),
      billAmount: billAmount !== "Unknown" ? `$${billAmount}` : "N/A",
      installationArea: customSelect,
      roofPhotoUrl: roofPhotoUrl || "N/A",
      electricPanelUrl: electricPanelUrl || "N/A",
      billUrl: billUrl || "N/A",
    },
  };

  await Promise.all([sgMail.send(adminMsg), sgMail.send(clientMsg)]);
}
export async function POST(request) {
  try {
    const formData = await request.formData();
    const data = {};
    let roofPhotoUrl = null;
    let electricPanelUrl = null;
    let billUrl = null;

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        if (value.size > 0) {
          const uploadedUrl = await uploadToS3(value);
          if (key === "roofPhoto") roofPhotoUrl = uploadedUrl;
          if (key === "electricPanel") electricPanelUrl = uploadedUrl;
          if (key === "bill") billUrl = uploadedUrl;
        }
      } else {
        try {
          data[key] = JSON.parse(value);
        } catch {
          data[key] = value;
        }
      }
    }

    const documentToInsert = {
      ...data,
      roofPhotoUrl,
      electricPanelUrl,
      billUrl,
      createdAt: new Date(),
    };

    const collection = await connectToDatabase();
    const result = await collection.insertOne(documentToInsert);

    // Send notification emails
    await sendNotificationEmails(documentToInsert);

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted and notifications sent successfully!",
        id: result.insertedId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error submitting form",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
