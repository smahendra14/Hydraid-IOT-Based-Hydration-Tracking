// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW5rC4lZ3C0Hy29kI4y-9b_U5ybH6RATA",
  authDomain: "hydraid-dafa4.firebaseapp.com",
  projectId: "hydraid-dafa4",
  storageBucket: "hydraid-dafa4.appspot.com",
  messagingSenderId: "719416669884",
  appId: "1:719416669884:web:91a0c1a2f5d588b2eec2b9",
  measurementId: "G-NKN8CQ8HME"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
