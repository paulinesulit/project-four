// Homepage.js

// components
import Header from "./Header.js";
import GenreLinks from "./GenreLinks.js";
import SearchBooks from "./SearchBooks.js";

const Homepage = () => {
  return (
    <div>
      <SearchBooks />
      <GenreLinks />
      
    </div>
  )
}

export default Homepage;