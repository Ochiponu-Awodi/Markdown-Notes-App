import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAItvpZpoCTfarfJLF7g65MO4suEa9mRO8",
  authDomain: "react-notes-77745.firebaseapp.com",
  projectId: "react-notes-77745",
  storageBucket: "react-notes-77745.appspot.com",
  messagingSenderId: "838881022654",
  appId: "1:838881022654:web:f67387d0d57ab5db30c4ef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, 'notes')