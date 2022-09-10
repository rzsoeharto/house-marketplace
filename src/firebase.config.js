// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxClKZe6jCcyJDMMfMG9EVOdRByaIkMU4",
  authDomain: "house-marketplace-app-bb3c3.firebaseapp.com",
  projectId: "house-marketplace-app-bb3c3",
  storageBucket: "house-marketplace-app-bb3c3.appspot.com",
  messagingSenderId: "792836984413",
  appId: "1:792836984413:web:cdfc8728ad8b38336247b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);