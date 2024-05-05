// pages/api/addProperty.js
import { initializeFirebaseAdmin } from "@/lib/firebase/initializeFirebaseAdmin";
import admin from "firebase-admin";

export default async function handler(req, res) {
  initializeFirebaseAdmin();
  if (req.method !== "PUT") {
    return res.status(405).end();
  }

  const data = req.body;

  try {
    await admin.firestore().collection("properties").doc(data.id).update(data);
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
