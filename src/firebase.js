// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA9D_wIaXWO_OQ5pX4po5HjGPKf73LMg4",
  authDomain: "react-chat-cc5e7.firebaseapp.com",
  projectId: "react-chat-cc5e7",
  storageBucket: "react-chat-cc5e7.appspot.com",
  messagingSenderId: "853572590828",
  appId: "1:853572590828:web:dbe5748dad5a1180e059c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);