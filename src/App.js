// components
import SearchBooks from './components/SearchBooks.js';
import FirebaseData from "./components/FirebaseData.js";
import Header from "./components/Header";
import GenreLinks from './components/GenreLinks.js';
import Footer from "./components/Footer";
import { Route, Routes } from 'react-router-dom';
import UserReadingList from './components/UserReadingList.js';
// modules


// styles
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Header />

      <GenreLinks />

      <UserReadingList />
      

      
      <Routes>
        <Route path="/" element={<SearchBooks />} />
      </Routes>
      <FirebaseData />
      
      <Footer />
    </div>
  );
}

export default App;