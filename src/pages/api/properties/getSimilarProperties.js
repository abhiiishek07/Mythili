import { initializeFirebaseAdmin } from "@/lib/firebase/initializeFirebaseAdmin";
import admin from "firebase-admin";

export const getSimilarProperties = async (type) => {
  initializeFirebaseAdmin();

  const propertiesSnap = await admin
    .firestore()
    .collection("properties")
    .where("type", "==", type)
    .limit(6)
    .get();

  let data = [];

  data = propertiesSnap.docs.map((doc, index) => ({
    id: doc.id,
    index: index,
    ...doc.data(),
  }));

  return data;
};
