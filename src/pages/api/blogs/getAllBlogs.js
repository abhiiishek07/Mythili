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

  // Sort the data by timestamp in descending order
  data.sort((a, b) => {
    // Convert timestamp strings to ISO 8601 format for comparison
    const dateA = new Date(a.time).toISOString();
    const dateB = new Date(b.time).toISOString();

    // Compare ISO 8601 formatted timestamps
    if (dateA < dateB) return 1; // Sort descending
    if (dateA > dateB) return -1; // Sort descending
    return 0;
  });

  return data;
};
