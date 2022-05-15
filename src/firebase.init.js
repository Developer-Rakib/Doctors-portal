// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAai3dtX_sEGJbJZ4g_95xvDo_sIacfAa4",
  authDomain: "doctors-portal-9e656.firebaseapp.com",
  projectId: "doctors-portal-9e656",
  storageBucket: "doctors-portal-9e656.appspot.com",
  messagingSenderId: "685686765063",
  appId: "1:685686765063:web:24865068b2d46d7f081ca2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;