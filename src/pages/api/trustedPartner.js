import { initializeFirebaseAdmin } from "@/lib/firebase/initializeFirebaseAdmin";
import admin from "firebase-admin";

export default async function handler(req, res) {
  initializeFirebaseAdmin();
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { urls } = req.body;

  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ success: false, message: "URLs are required" });
  }

  try {
    const addedImages = [];
    for (const url of urls) {
      const docRef = await admin.firestore().collection("trustedPartners").add({ url });
      const newDoc = await docRef.get();
      addedImages.push({
        id: newDoc.id,
        url: newDoc.data().url
      });
    }

    return res.status(200).json({
      success: true,
      images: addedImages
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
