// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2NPXjOha5ipuT_tmg6CxLd48fEVY-cvQ",
  authDomain: "newser-422a0.firebaseapp.com",
  projectId: "newser-422a0",
  storageBucket: "newser-422a0.appspot.com",
  messagingSenderId: "503053256476",
  appId: "1:503053256476:web:8710aef17c65586239dcd9",
  measurementId: "G-MMJVBPYFCP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);