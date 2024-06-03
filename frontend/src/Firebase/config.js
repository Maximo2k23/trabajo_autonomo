// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzFPV3qN1cHJ5ZwP-XThzsrQ5Hd20yWUc",
  authDomain: "upal-proyect.firebaseapp.com",
  projectId: "upal-proyect",
  storageBucket: "upal-proyect.appspot.com",
  messagingSenderId: "923123998319",
  appId: "1:923123998319:web:4d8e38e024ae52f309b79a",
  measurementId: "G-5QPE38QK39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };