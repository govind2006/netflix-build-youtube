// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDkn7Rom7EQvdTFJgqTCuftSNMJYX6p0PA",
  authDomain: "netflix-clone-f208d.firebaseapp.com",
  databaseURL: "https://netflix-clone-f208d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-clone-f208d",
  storageBucket: "netflix-clone-f208d.appspot.com",
  messagingSenderId: "912071606515",
  appId: "1:912071606515:web:857324b02396e064d8b786",
  // measurementId: "G-69J20TCH7X",
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;