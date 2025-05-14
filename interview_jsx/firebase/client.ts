// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsHv3jOlUfWf_3vmltl9VqRVBDPq5zL8I",
  authDomain: "prep-it-a0c04.firebaseapp.com",
  projectId: "prep-it-a0c04",
  storageBucket: "prep-it-a0c04.firebasestorage.app",
  messagingSenderId: "873336017838",
  appId: "1:873336017838:web:30ebe56a559a9e7a59ee3f",
  measurementId: "G-FD7WMR4GH9",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
