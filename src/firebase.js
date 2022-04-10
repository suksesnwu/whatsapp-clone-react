import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFfQw1cR8iPNOgl2awY6H5_JX8iWOnmpY",
  authDomain: "whatsapp-clone-307ad.firebaseapp.com",
  projectId: "whatsapp-clone-307ad",
  storageBucket: "whatsapp-clone-307ad.appspot.com",
  messagingSenderId: "82606949617",
  appId: "1:82606949617:web:6b36613260644f106f1550",
  measurementId: "G-VMGCR5MJ9M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;