// GenreLinks.js

// components
import MurderBooks from "./MurderBooks.js";
import SciFiBooks from "./SciFiBooks.js";
import FantasyBooks from "./FantasyBooks.js";
import RomanceBooks from "./RomanceBooks.js";

// modules
import { Link, Route, Routes } from "react-router-dom";

const GenreLinks = () => {

  
  


  return (
    <div>
      <nav>
          <ul>
            <li>
              <Link to='/genre/murder'>Murder</Link>
            </li>
            <li>
              <Link to='/genre/fantasy'>Fantasy</Link>
            </li>
            <li>
              <Link to='/genre/sci-fi'>Sci-Fi</Link>
            </li>
            <li>
              <Link to='/genre/romance'>Romance</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/genre/murder" element={ <MurderBooks /> } aria-label="Link to murder themed books" />
          <Route path="/genre/sci-fi" element={<SciFiBooks />}  aria-label="Link to sci-fi themed books"  />
          <Route path="/genre/fantasy" element={<FantasyBooks />}  aria-label="Link to fantasy themed books" />
        <Route path="/genre/romance" element={<RomanceBooks />} aria-label="Link to romance themed books" />
        </Routes>

    </div>
  )
}

export default GenreLinks;