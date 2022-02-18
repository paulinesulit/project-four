// components

import Header from "./components/Header";
import Homepage from './components/Homepage.js';
import Footer from "./components/Footer";
import UserReadingList from "./components/UserReadingList.js";
import BookDetails from "./components/BookDetails.js";
import MurderBooks from './components/MurderBooks.js';
import SciFiBooks from './components/SciFiBooks.js';
import RomanceBooks from './components/RomanceBooks.js';
import FantasyBooks from './components/FantasyBooks.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Reset from "./components/Reset.js";
import Dashboard from "./components/Dashboard.js";

// modules
import { Route, Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from ".//firebaseSetup.js";

// styles
import "./styles/styles.css";

function App() {
  const [ user ] = useAuthState(auth);
  return (
    <div className="App">
     
      <Header user={user} />
      
      

      

      <Routes>
        <Route path='/book/:bookId' element={<BookDetails />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/mybooks' element={<UserReadingList user={user} />} />
        <Route path='/genre/murder' element={<MurderBooks />} aria-label="Link to murder themed books" />
        <Route path='/genre/sci-fi' element={<SciFiBooks />} aria-label="Link to sci-fi themed books" />
        <Route path='/genre/fantasy' element={<FantasyBooks />} aria-label="Link to fantasy themed books" />
        <Route path='/genre/romance' element={<RomanceBooks />} aria-label="Link to romance themed books" />
        
        <Route exact path="/login" element={<Login />} aria-label="Link to email login" />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
       
      </Routes>

      <Footer />
    </div>
  );
}

export default App;