import { initializeFirebaseAdmin } from "@/lib/firebase/initializeFirebaseAdmin";
import admin from "firebase-admin";

export const getAllContactUsUsers = async () => {
  initializeFirebaseAdmin();

  const usersSnap = await admin.firestore().collection("contactUs").get();

  let data = [];

  data = usersSnap.docs.map((doc, index) => ({
    id: doc.id,
    index: index,
    ...doc.data(),
  }));

  return data;
};
