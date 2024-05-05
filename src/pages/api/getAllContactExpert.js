import { initializeFirebaseAdmin } from "@/lib/firebase/initializeFirebaseAdmin";
import admin from "firebase-admin";

export const getAllContactExpert = async () => {
  initializeFirebaseAdmin();

  const usersSnap = await admin.firestore().collection("contact-expert").get();

  let data = [];

  data = usersSnap.docs.map((doc, index) => ({
    id: doc.id,
    index: index,
    ...doc.data(),
  }));

  return data;
};
