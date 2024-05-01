import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDm9p4mP9IyWToyrl6ZMhuXf9ELpxKYAls",
  authDomain: "real-estate-stage.firebaseapp.com",
  projectId: "real-estate-stage",
  storageBucket: "real-estate-stage.appspot.com",
  messagingSenderId: "83516872873",
  appId: "1:83516872873:web:58d52f5c46ad639288f1b8",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const auth = getAuth(app);

export { storage,auth };
