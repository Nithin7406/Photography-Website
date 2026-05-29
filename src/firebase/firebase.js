// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// 1. ADD THESE TWO IMPORTS
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7NVx4YdYqSP0KBqkWb-qU8C_NbFVZ8aU",
  authDomain: "photography-gallery-640de.firebaseapp.com",
  projectId: "photography-gallery-640de",
  storageBucket: "photography-gallery-640de.firebasestorage.app",
  messagingSenderId: "536200176618",
  appId: "1:536200176618:web:ee737f34b04ebe5f7a8893",
  measurementId: "G-V2GN1D98KW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 2. EXPORT STORAGE AND DB SO YOUR APP CAN USE THEM
export const storage = getStorage(app);
export const db = getFirestore(app);
