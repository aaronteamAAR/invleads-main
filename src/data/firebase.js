import firebase from 'firebase/compat/app'
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


var firebaseConfig = {
    apiKey: process.env.ASTRO_API_KEY,
    authDomain: "newsletter-35f0c.firebaseapp.com",
    projectId: "newsletter-35f0c",
    storageBucket: "newsletter-35f0c.appspot.com",
    messagingSenderId: "718323008693",
    appId: "1:718323008693:web:68b8aebbaccfe3fbf9aafc"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

export const store = getFirestore(firebaseApp)

export { db }