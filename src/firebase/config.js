// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgFZ5lmjvp4vP5yiYAP7waHnfTXPjpHK0",
  authDomain: "cafe-app-e8725.firebaseapp.com",
  projectId: "cafe-app-e8725",
  storageBucket: "cafe-app-e8725.appspot.com",
  messagingSenderId: "691578535593",
  appId: "1:691578535593:web:6ebfefc12dc962b66873b8",
  measurementId: "G-FMG2P13RXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

getAnalytics(app);