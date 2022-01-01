// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import {getStorage} from 'firebase/storage'
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
// import getFirestore from 'firebase/firestore'

// const firebaseApp =new GoogleAuthProvider(getAuth)

// console.log(firebaseApp)

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCseF0afitQa95p5ObOl771HRxTfYY_vAA",
  authDomain: "disneyplus-clone-d78fc.firebaseapp.com",
  projectId: "disneyplus-clone-d78fc",
  storageBucket: "disneyplus-clone-d78fc.appspot.com",
  messagingSenderId: "480563522637",
  appId: "1:480563522637:web:9ebbfb02c714b7708c0004",
  measurementId: "G-39FXVG0TQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const storage = getStorage()
const colRef = collection(db, 'movies')
// const docs = getDocs()
getDocs(colRef)
.then((snapshot) => console.log(snapshot.docs))
console.log(colRef)

export {auth, provider, storage, colRef }
export default db