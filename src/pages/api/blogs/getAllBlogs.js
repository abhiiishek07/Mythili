import { initializeFirebaseAdmin } from "@/lib/firebase/initializeFirebaseAdmin";
import admin from "firebase-admin";

export const getAllBlogs = async () => {
  initializeFirebaseAdmin();

  const blogsSnap = await admin.firestore().collection("blogs").get();

  let data = [];

  data = blogsSnap.docs.map((doc, index) => ({
    id: doc.id,
    index: index,
    ...doc.data(),
  }));

  return data;
};
