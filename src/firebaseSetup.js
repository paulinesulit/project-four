// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY_FB}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  databaseURL: "https://books-again-6cf0f-default-rtdb.firebaseio.com",
  projectId: "books-again-6cf0f",
  storageBucket: "books-again-6cf0f.appspot.com",
  messagingSenderId: "187764535148",
  appId: "1:187764535148:web:a338f34566ad7929df8d49",
};

// Initialize Firebase
const BooksProject = initializeApp(firebaseConfig);

export default BooksProject;