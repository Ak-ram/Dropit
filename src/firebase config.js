// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe1NdocHmbz3Puji-wOtKnY7gbkqwHYcg",
  authDomain: "dropit-945fd.firebaseapp.com",
  databaseURL: "https://dropit-945fd-default-rtdb.firebaseio.com",
  projectId: "dropit-945fd",
  storageBucket: "dropit-945fd.appspot.com",
  messagingSenderId: "366260824613",
  appId: "1:366260824613:web:563571a569f9ffbd476dcc",
  measurementId: "G-S5FX4BRD2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);