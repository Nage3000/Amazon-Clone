import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFtOdHMv-5mcHAP6LKk9h5WCOv09uxr6Q",
  authDomain: "clone-5511b.firebaseapp.com",
  projectId: "clone-5511b",
  storageBucket: "clone-5511b.appspot.com",
  messagingSenderId: "218129834758",
  appId: "1:218129834758:web:8c57e24ebd06136a06f487",
  measurementId: "G-KE7V13890K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };