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

// modules
import { Route, Routes } from "react-router-dom";

// styles
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/mybooks" element={<UserReadingList />} />
        <Route
          path="/genre/murder"
          element={<MurderBooks />}
          aria-label="Link to murder themed books"
        />
        <Route
          path="/genre/sci-fi"
          element={<SciFiBooks />}
          aria-label="Link to sci-fi themed books"
        />
        <Route
          path="/genre/fantasy"
          element={<FantasyBooks />}
          aria-label="Link to fantasy themed books"
        />
        <Route
          path="/genre/romance"
          element={<RomanceBooks />}
          aria-label="Link to romance themed books"
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;