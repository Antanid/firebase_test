import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvUvM4EZmljJ94NkQGV5qWYlVux1LLHgQ",
  authDomain: "test1-940e0.firebaseapp.com",
  projectId: "test1-940e0",
  storageBucket: "test1-940e0.appspot.com",
  messagingSenderId: "710047201449",
  appId: "1:710047201449:web:e38b97b6bb283a361651b8",
  measurementId: "G-1WB881SLM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const createUser = async (email, password) => {
return createUserWithEmailAndPassword(getAuth(app), email, password)
}

export const signInUser = async (email, password) => {
    return signInWithEmailAndPassword(getAuth(app), email, password);
}