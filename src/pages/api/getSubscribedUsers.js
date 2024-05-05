import { initializeFirebaseAdmin } from "@/lib/firebase/initializeFirebaseAdmin";
import admin from "firebase-admin";

export const getAllSubscribedUsers = async () => {
  initializeFirebaseAdmin();

  const usersSnap = await admin.firestore().collection("subscribers").get();

  let data = [];

  data = usersSnap.docs.map((doc, index) => ({
    id: doc.id,
    index: index,
    ...doc.data(),
  }));

  return data;
};
