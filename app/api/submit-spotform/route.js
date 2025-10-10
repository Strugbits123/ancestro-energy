import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// ---- MongoDB Setup ----
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }
  const db = client.db(process.env.MONGO_DB_NAME || "ancestro");
  return db.collection("spotform");
}

export async function POST(request) {
  try {
    const data = await request.json();

    const documentToInsert = {
      ...data,
      createdAt: new Date(),
    };

    const collection = await connectToDatabase();
    const result = await collection.insertOne(documentToInsert);

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully!",
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