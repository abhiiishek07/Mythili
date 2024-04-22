import { initializeFirebaseAdmin } from "@/lib/firebase/initializeFirebaseAdmin";
import admin from "firebase-admin";

export const getPropertyInfo = async (propertyId) => {
  initializeFirebaseAdmin();

  const propertSnap = await admin
    .firestore()
    .collection("properties")
    .doc(propertyId)
    .get();

  const data = propertSnap.data();

  return data;
};
