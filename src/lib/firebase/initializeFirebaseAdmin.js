import admin from "firebase-admin";

const serviceAccountStage = {
  type: "service_account",
  project_id: "real-estate-stage",
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY,
  client_email:
    "firebase-adminsdk-gux5v@real-estate-stage.iam.gserviceaccount.com",
  client_id: process.env.CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.CLIENT_CERT_URL,
  universe_domain: "googleapis.com",
};

const initializeFirebaseAdmin = () => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountStage),
    });
  }
};

export { initializeFirebaseAdmin };
