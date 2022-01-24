// components
import SearchBooks from './components/SearchBooks.js';
import PageButton from './components/PageButton.js';
import FirebaseData from "./components/FirebaseData.js";
import Header from "./components/Header";
import ListBooks from './components/ListBooks.js';
import Footer from "./components/Footer";

// modules

// styles
import "./styles/styles.css";

function App() {
  
  return (
    <div className="App">
      <Header />
      <SearchBooks />
      <FirebaseData />
      <PageButton />
      <Footer />
    </div>
  );
}

export default App;