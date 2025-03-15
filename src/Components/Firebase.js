// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_B5wi9ki_JaprJRj3SE5P5KD9MLo-wuw",
  authDomain: "e-commerce-a96ff.firebaseapp.com",
  projectId: "e-commerce-a96ff",
  storageBucket: "e-commerce-a96ff.firebasestorage.app",
  messagingSenderId: "439934491240",
  appId: "1:439934491240:web:e60a9a8ccde017957e79dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export default app;