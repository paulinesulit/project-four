// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM-IBDtywpbqcgLu5g3tbtDdg4tTMffhE",
  authDomain: "books-again-6cf0f.firebaseapp.com",
  projectId: "books-again-6cf0f",
  storageBucket: "books-again-6cf0f.appspot.com",
  messagingSenderId: "187764535148",
  appId: "1:187764535148:web:a338f34566ad7929df8d49",
};

// Initialize Firebase
const BooksProject = initializeApp(firebaseConfig);

export default BooksProject;
