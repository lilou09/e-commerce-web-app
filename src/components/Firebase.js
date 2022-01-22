import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYNe1hvnxBjEqBNzMbVVGuIBoJMd9dvMo",
  authDomain: "eshop-64599.firebaseapp.com",
  projectId: "eshop-64599",
  storageBucket: "eshop-64599.appspot.com",
  messagingSenderId: "567356295304",
  appId: "1:567356295304:web:9f835714e9832a3bfaf73d",
  measurementId: "G-CSFXMFGV28",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
