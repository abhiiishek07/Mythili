import { initializeFirebaseAdmin } from "@/lib/firebase/initializeFirebaseAdmin";
import admin from "firebase-admin";

export const getAllProperties = async () => {
  initializeFirebaseAdmin();

  const propertiesSnap = await admin
    .firestore()
    .collection("properties")
    .where("isPublic", "==", true)
    .get();

  let data = [];

  data = propertiesSnap.docs.map((doc, index) => ({
    id: doc.id,
    index: index,
    ...doc.data(),
  }));

  return data;
};
