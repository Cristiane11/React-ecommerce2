// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwl0F9ET-GQ8c_bQ01drz2k7nqwXjC4HQ",
  authDomain: "scratchcommerce.firebaseapp.com",
  projectId: "scratchcommerce",
  storageBucket: "scratchcommerce.firebasestorage.app",
  messagingSenderId: "193246183868",
  appId: "1:193246183868:web:366054360f7e78b4936bb9"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { app };


