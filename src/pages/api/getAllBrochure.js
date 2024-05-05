import { initializeFirebaseAdmin } from "@/lib/firebase/initializeFirebaseAdmin";
import admin from "firebase-admin";

export const getAllBrochure = async () => {
  initializeFirebaseAdmin();

  const usersSnap = await admin.firestore().collection("brochure").get();

  let data = [];

  data = usersSnap.docs.map((doc, index) => ({
    id: doc.id,
    index: index,
    ...doc.data(),
  }));

  return data;
};
