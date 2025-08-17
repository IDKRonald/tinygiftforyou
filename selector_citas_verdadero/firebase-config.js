// firebase-config.js
// Usando CDN, no módulos locales

// Tu configuración de Firebase (del proyecto "gift")
const firebaseConfig = {
  apiKey: "AIzaSyCeRHGNy9x2Liu6hRJN3TTH9d1zYkJ_NjM",
  authDomain: "gift-4ccdd.firebaseapp.com",
  projectId: "gift-4ccdd",
  storageBucket: "gift-4ccdd.appspot.com",
  messagingSenderId: "1071586504959",
  appId: "1:1071586504959:web:5b9eda86a0e41973e19cca",
  measurementId: "G-GB5WQVKWGK"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
