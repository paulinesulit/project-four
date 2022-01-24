// components
import Books from './components/Books.js';
import FirebaseData from "./components/FirebaseData.js";
import Header from "./components/Header";
import Footer from "./components/Footer";

// modules

// styles
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Books />
      <FirebaseData />
      <Footer />
    </div>
  );
}

export default App;