// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeRHGNy9x2Liu6hRJN3TTH9d1zYkJ_NjM",
  authDomain: "gift-4ccdd.firebaseapp.com",
  projectId: "gift-4ccdd",
  storageBucket: "gift-4ccdd.firebasestorage.app",
  messagingSenderId: "1071586504959",
  appId: "1:1071586504959:web:5b9eda86a0e41973e19cca",
  measurementId: "G-GB5WQVKWGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);