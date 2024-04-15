// firebaseAdminMiddleware.js
import admin from "firebase-admin";
const serviceAccountStage = require("./firebaseAdminSdkSTAGE.json");
// const serviceAccountProd = require("./firebaseAdminSdkPROD.json");

const initializeFirebaseAdmin = () => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountStage),
    });
  }
};

export { initializeFirebaseAdmin };
