// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGGfst_AKQ2o0d-ngJnWFeCl-BN2Vssws",
  authDomain: "miniblog-137b0.firebaseapp.com",
  projectId: "miniblog-137b0",
  storageBucket: "miniblog-137b0.appspot.com",
  messagingSenderId: "178964397411",
  appId: "1:178964397411:web:ccaa999ef352083876a756",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
