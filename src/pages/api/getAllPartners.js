// lib/firebase/getAllTrustedPartners.js
import { initializeFirebaseAdmin } from "@/lib/firebase/initializeFirebaseAdmin";
import * as admin from "firebase-admin";

export const getAllTrustedPartners = async () => {
  initializeFirebaseAdmin();

  const trustedPartnersSnap = await admin.firestore().collection("trustedPartners").get();

  const data = trustedPartnersSnap.docs.map((doc, index) => ({
    id: doc.id,
    index: index,
    ...doc.data(),
  }));

  return data;
};
