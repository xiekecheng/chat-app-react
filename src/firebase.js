// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTji6wsWC0Z1YNeVJ4U9fWwuzGdAlobH4",
  authDomain: "chat-app-26c67.firebaseapp.com",
  projectId: "chat-app-26c67",
  storageBucket: "chat-app-26c67.appspot.com",
  messagingSenderId: "618777610150",
  appId: "1:618777610150:web:1b7a11af510a709ad07167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
