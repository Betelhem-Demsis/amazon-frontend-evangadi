import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB51T0EYbsMHpuS-PcG-Ch3hqrch-_OI6g",
  authDomain: "eclone-83ddc.firebaseapp.com",
  projectId: "eclone-83ddc",
  storageBucket: "eclone-83ddc.firebasestorage.app",
  messagingSenderId: "16550153155",
  appId: "1:16550153155:web:2ced0f392352a705b88b76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
