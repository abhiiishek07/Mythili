// pages/api/addProperty.js
import { initializeFirebaseAdmin } from "@/lib/firebase/initializeFirebaseAdmin";
import { sessionOptions } from "@/lib/utils";
import admin from "firebase-admin";

import { getIronSession } from "iron-session";

export default async function handler(req, res) {
  initializeFirebaseAdmin();
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const session = await getIronSession(req, res, sessionOptions);

  if (!session.isLoggedIn) {
    return res.status(405).json({ success: false, message: "Unauthorized" });
  }

  const data = req.body;

  console.log("d", data);

  try {
    await admin.firestore().collection("blogs").doc(data.id).update({
      title: data.title,
      image: data.image,
      description: data.description,
      htmlDescription: data.htmlDescription,
      plainTextDescription: data.plainTextDescription,
      time: data.time,
    });
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
