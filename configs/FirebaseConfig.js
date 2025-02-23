// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0hpFONj-BVL0u0SgmePRlmOmGUNYabxs",
  authDomain: "aitripplanner-59e57.firebaseapp.com",
  projectId: "aitripplanner-59e57",
  storageBucket: "aitripplanner-59e57.firebasestorage.app",
  messagingSenderId: "909405062174",
  apiKey: "AIzaSyC0hpFONj-BVL0u0SgmePRlmOmGUNYabxs",
  authDomain: "aitripplanner-59e57.firebaseapp.com",
  projectId: "aitripplanner-59e57",
  storageBucket: "aitripplanner-59e57.firebasestorage.app",
  messagingSenderId: "909405062174",
  appId: "1:909405062174:web:609a78cb850f18c9475a0f",
  measurementId: "G-D9PP5ZSF1S"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);