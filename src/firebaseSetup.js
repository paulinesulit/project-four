// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { getDatabase } from "firebase/database";
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
const db = getFirestore(BooksProject);
const auth = getAuth(BooksProject);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try { 
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("iud", "==", user.uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
     await addDoc(collection(db, "users"), {
       uid: user.uid,
       name: user.displayName,
       authProvider: "google",
       email: user.email,
      });
    } 
  } catch (error) {
      // Handle Errors here.
      console.log(error);
      
      const errorMessage = error.message;
      alert(errorMessage);
      // The email of the user's account used.
      // const email = error.email;
    }
}

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert("Wrong email/password combo OR email does not exist");
  }
}

const registerWithEmailAndPassword = async ( name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password, name);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: user.displayName,
      authProvider: "local",
      email,
    });
  } catch (error) {
      console.log(error);
      alert(error.message);
  }
}

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

const logout = () => {
  signOut(auth);
}
export default BooksProject;
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};