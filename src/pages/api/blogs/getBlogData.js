import { initializeFirebaseAdmin } from "@/lib/firebase/initializeFirebaseAdmin";
import admin from "firebase-admin";

export const getblogData = async (blogId) => {
  initializeFirebaseAdmin();

  const propertSnap = await admin
    .firestore()
    .collection("blogs")
    .doc(blogId)
    .get();

  const data = propertSnap.data();

  return data;
};
