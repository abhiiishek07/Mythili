import { initializeFirebaseAdmin } from "@/lib/firebase/initializeFirebaseAdmin";
import admin from "firebase-admin";

export const getAllPropertiesAdmin = async () => {
  initializeFirebaseAdmin();

  const propertiesSnap = await admin.firestore().collection("properties").get();

  let data = [];

  data = propertiesSnap.docs.map((doc, index) => ({
    id: doc.id,
    index: index,
    ...doc.data(),
  }));

  return data;
};
