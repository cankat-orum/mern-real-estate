// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-4e01c.firebaseapp.com",
  projectId: "mern-real-estate-4e01c",
  storageBucket: "mern-real-estate-4e01c.appspot.com",
  messagingSenderId: "19037480768",
  appId: "1:19037480768:web:5c89d7822b9daff97e7ca5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
