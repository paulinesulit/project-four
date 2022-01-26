// components
import SearchBooks from './components/SearchBooks.js';
import FirebaseData from "./components/FirebaseData.js";
import Header from "./components/Header";
import GenreLinks from './components/GenreLinks.js';
import Footer from "./components/Footer";
import UserReadingList from "./components/UserReadingList.js";
import BookDetails from "./components/BookDetails.js";

// modules
import { Route, Routes } from "react-router-dom";

// styles
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Header />

      <GenreLinks />

      <Routes>
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="/" element={<SearchBooks />} />
        <Route path="/mybooks" element={<UserReadingList />} />
      </Routes>
      <FirebaseData />

      <Footer />
    </div>
  );
}

export default App;