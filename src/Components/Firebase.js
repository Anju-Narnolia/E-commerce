import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_B5wi9ki_JaprJRj3SE5P5KD9MLo-wuw",
  authDomain: "e-commerce-a96ff.firebaseapp.com",
  projectId: "e-commerce-a96ff",
  storageBucket: "e-commerce-a96ff.firebasestorage.app",
  messagingSenderId: "439934491240",
  appId: "1:439934491240:web:e60a9a8ccde017957e79dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
