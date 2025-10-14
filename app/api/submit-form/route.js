
// import { NextResponse } from "next/server";
// import { MongoClient } from "mongodb";
// import AWS from "aws-sdk";
// import sgMail from "@sendgrid/mail";

// // ---- Configure SendGrid ----
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// // ---- AWS S3 Config ----
// const s3 = new AWS.S3({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION,
// });

// // ---- MongoDB Setup ----
// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri);

// async function connectToDatabase() {
//   if (!client.topology || !client.topology.isConnected()) {
//     await client.connect();
//   }
//   const db = client.db( process.env.MONGO_DB_NAME || "ancestro");
//   return db.collection("ancestroenergy");
// }

// // ---- Upload File to S3 ----
// async function uploadToS3(file) {
//   const arrayBuffer = await file.arrayBuffer();
//   const buffer = Buffer.from(arrayBuffer);

//   const uploadParams = {
//     Bucket: process.env.S3_BUCKET_NAME,
//     Key: `uploads/${Date.now()}-${file.name}`,
//     Body: buffer,
//     ContentType: file.type,
//   };

//   const { Location } = await s3.upload(uploadParams).promise();
//   return Location;
// }



// export async function sendNotificationEmails(formValues) {
//   const {
//     fullName = "Unknown",
//     email = "Unknown",
//     phone = "Unknown",
//     city = "Unknown",
//     country = "Unknown",
//     projectType = "Unknown",
//     propertyOwner = "Unknown",
//     step2 = "Unknown",
//     projectTypeSelect = "Unknown",
//     step3 = [],
//     step4 = [],
//     billAmount = "Unknown",
//     customSelect = "Unknown",
//     roofPhotoUrl = "Unknown",
//     electricPanelUrl = "Unknown",
//     billUrl = "Unknown",
//   } = formValues;

//   const formatList = (arr) => (arr && arr.length ? arr.join(", ") : "N/A");

//   const adminMsg = {
//     to: process.env.ADMIN_EMAIL || process.env.FROM_EMAIL,
//     from: process.env.FROM_EMAIL,
//     templateId: "d-88af0dba329a472583c201e92310a111", 
//     dynamic_template_data: {
//       fullName,
//       email,
//       phone,
//       city,
//       country,
//       projectType,
//       propertyOwner,
//       currentlyHaveSolar: step2,
//       projectTypeSelect,
//       goals: formatList(step3),
//       motivations: formatList(step4),
//       billAmount: billAmount !== "Unknown" ? `$${billAmount}` : "N/A",
//       installationArea: customSelect,
//       roofPhotoUrl: roofPhotoUrl || "N/A",
//       electricPanelUrl: electricPanelUrl || "N/A",
//       billUrl: billUrl || "N/A",
//     },
//   };

//   const clientMsg = {
//     to: email,
//     from: process.env.FROM_EMAIL,
//     templateId: "d-d332299b2f4b43a5b7421e989398d27c", 
//     dynamic_template_data: {
//       fullName,
//       email,
//       phone,
//       city,
//       country,
//       projectType,
//       propertyOwner,
//       currentlyHaveSolar: step2,
//       projectTypeSelect,
//       goals: formatList(step3),
//       motivations: formatList(step4),
//       billAmount: billAmount !== "Unknown" ? `$${billAmount}` : "N/A",
//       installationArea: customSelect,
//       roofPhotoUrl: roofPhotoUrl || "N/A",
//       electricPanelUrl: electricPanelUrl || "N/A",
//       billUrl: billUrl || "N/A",
//     },
//   };

//   await Promise.all([sgMail.send(adminMsg), sgMail.send(clientMsg)]);
// }
// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const data = {};
//     let roofPhotoUrl = null;
//     let electricPanelUrl = null;
//     let billUrl = null;

//     for (const [key, value] of formData.entries()) {
//       if (value instanceof File) {
//         if (value.size > 0) {
//           const uploadedUrl = await uploadToS3(value);
//           if (key === "roofPhoto") roofPhotoUrl = uploadedUrl;
//           if (key === "electricPanel") electricPanelUrl = uploadedUrl;
//           if (key === "bill") billUrl = uploadedUrl;
//         }
//       } else {
//         try {
//           data[key] = JSON.parse(value);
//         } catch {
//           data[key] = value;
//         }
//       }
//     }

//     const documentToInsert = {
//       ...data,
//       roofPhotoUrl,
//       electricPanelUrl,
//       billUrl,
//       createdAt: new Date(),
//     };

//     const collection = await connectToDatabase();
//     const result = await collection.insertOne(documentToInsert);

//     // Send notification emails
//     await sendNotificationEmails(documentToInsert);

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Form submitted and notifications sent successfully!",
//         id: result.insertedId,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Form submission error:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Error submitting form",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }
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
  const db = client.db(process.env.MONGO_DB_NAME || "ancestro");
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


async function sendNotificationEmails(documentToInsert) {
  const {
    fullName = "Unknown",
    email = "Unknown",
    phone = "Unknown",
    city = "Unknown",
    country = "Unknown",
    projectTypeSelect = "Unknown",
    isPropertyOwner = null,
    needsRoofReplacement = null,
    businessInfo = {},
    additionalQuestions = {},
    billAmount = null,
    propertyType = "Unknown",
    roofPhotoUrl = null,
    electricPanelUrl = null,
    billUrl = null,
  } = documentToInsert;

  const formatList = (obj, keys) => {
    const selected = keys.filter((key) => obj[key]).map((key) => key.replace(/([A-Z])/g, " $1").trim());
    return selected.length ? selected.join(", ") : "N/A";
  };

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
      projectType: projectTypeSelect, 
      propertyOwner: isPropertyOwner === true ? "Yes" : isPropertyOwner === false ? "No" : "Not Specified",
      currentlyHaveSolar: needsRoofReplacement === true ? "Yes" : needsRoofReplacement === false ? "No" : "Not Sure", 
      projectTypeSelect, 
      goals: formatList(businessInfo, [
        "solarSubscriptionCurrentNeeds",
        "solarSubscriptionSurplusEnergy",
        "batterySubscriptionPartialBackup",
        "batterySubscriptionFullBackup",
        "evChargingOnSite",
      ]), 
      motivations: formatList(additionalQuestions, [
        "reduceElectricityBills",
        "reduceBlackoutRisk",
        "supportSustainability",
        "allOfAbove",
      ]), 
      billAmount: billAmount !== null ? `$${billAmount}` : "N/A",
      installationArea: propertyType, 
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
      projectType: projectTypeSelect, 
      propertyOwner: isPropertyOwner === true ? "Yes" : isPropertyOwner === false ? "No" : "Not Specified", 
      currentlyHaveSolar: needsRoofReplacement === true ? "Yes" : needsRoofReplacement === false ? "No" : "Not Sure", 
      projectTypeSelect, 
      goals: formatList(businessInfo, [
        "solarSubscriptionCurrentNeeds",
        "solarSubscriptionSurplusEnergy",
        "batterySubscriptionPartialBackup",
        "batterySubscriptionFullBackup",
        "evChargingOnSite",
      ]), 
      motivations: formatList(additionalQuestions, [
        "reduceElectricityBills",
        "reduceBlackoutRisk",
        "supportSustainability",
        "allOfAbove",
      ]), 
      billAmount: billAmount !== null ? `$${billAmount}` : "N/A",
      installationArea: propertyType, 
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

    // Transform data for MongoDB storage
    const documentToInsert = {
      fullName: data.fullName || "",
      email: data.email || "",
      phone: data.phone || "",
      city: data.city || "",
      country: data.country || "",
      projectTypeSelect: data.projectTypeSelect || "",
      isPropertyOwner: data.propertyOwner === "YES" ? true : data.propertyOwner === "NO" ? false : null,
      needsRoofReplacement:
        data.step2 === "Yes" ? true : data.step2 === "No" ? false : data.step2 === "Not Sure" ? null : null,
      propertyType: data.customSelect || "",
      billAmount: data.billAmount ? Number(data.billAmount) : null,
      businessInfo: {
        solarSubscriptionCurrentNeeds: (data.step3 || []).includes("SOLAR SUBSCRIPTION BASED ON CURRENT NEEDS"),
        solarSubscriptionSurplusEnergy: (data.step3 || []).includes(
          "SOLAR SUBSCRIPTION TO PROVIDE A SURPLUS OF ENERGY BEYOND CURRENT NEEDS"
        ),
        batterySubscriptionPartialBackup: (data.step3 || []).includes("BATTERY SUBSCRIPTION (PARTIAL BACKUP ESSENTIAL LOADS)"),
        batterySubscriptionFullBackup: (data.step3 || []).includes("BATTERY SUBSCRIPTION (FULL BACKUP FOR TOTAL INDEPENDENCE)"),
        evChargingOnSite: (data.step3 || []).includes("EV CHARGING ON SITE"),
      },
      additionalQuestions: {
        reduceElectricityBills: (data.step4 || []).includes("REDUCE MY ELECTRICITY BILLS"),
        reduceBlackoutRisk: (data.step4 || []).includes("REDUCE BLACKOUT RISK"),
        supportSustainability: (data.step4 || []).includes("SUPPORT SUSTAINAINABILITY"),
        
      },
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