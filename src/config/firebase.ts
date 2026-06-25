import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSsAuasXhxi-YkH7R_Toskcm5GSVviKb4",
  authDomain: "eductome-web.firebaseapp.com",
  projectId: "eductome-web",
  storageBucket: "eductome-web.firebasestorage.app",
  messagingSenderId: "530682985809",
  appId: "1:530682985809:web:5a9e2d79a275dab7dc2770",
  measurementId: "G-XYRBNWD9TF"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Enable offline persistence (Gbaka Mode)
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code == 'failed-precondition') {
    console.warn('Multiple tabs open, offline persistence disabled in this tab');
  } else if (err.code == 'unimplemented') {
    console.warn('The current browser does not support offline persistence');
  }
});

export const storage = getStorage(app);
