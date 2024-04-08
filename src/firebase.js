// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_VcvSiHjQYq51jHcC_Zj4Y4Rry-G6k0s",
  authDomain: "agropartes-ca.firebaseapp.com",
  projectId: "agropartes-ca",
  storageBucket: "agropartes-ca.appspot.com",
  messagingSenderId: "579229619063",
  appId: "1:579229619063:web:c489c1279f8156d40b8772",
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
