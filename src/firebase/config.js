// import * as firebase from 'firebase/app';
import firebase from 'firebase/compat/app'
// import 'firebase/storage';
// import 'firebase/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9B4qcco7UFunzFJ076lws6y3niT15fJ0",
  authDomain: "firegram-app-8baef.firebaseapp.com",
  projectId: "firegram-app-8baef",
  storageBucket: "firegram-app-8baef.appspot.com",
  messagingSenderId: "69510423482",
  appId: "1:69510423482:web:5b181126478f10b2edb383"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export default firebase;

export { projectStorage , projectFirestore}