// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhXAw37Iq3eG8DCIY5MokdmSoNADKGTBI",
  authDomain: "books-books-books.firebaseapp.com",
  projectId: "books-books-books",
  storageBucket: "books-books-books.appspot.com",
  messagingSenderId: "110359144158",
  appId: "1:110359144158:web:7ae38975cc4bafed4c844f",
};

// Initialize Firebase
const BooksProject = initializeApp(firebaseConfig);

export default BooksProject;
