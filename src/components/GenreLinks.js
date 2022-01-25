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
          <Route path="/genre/murder" element={ <MurderBooks /> }/>
          <Route path="/genre/sci-fi" element={<SciFiBooks />} />
          <Route path="/genre/fantasy" element={<FantasyBooks />} />
        <Route path="/genre/romance" element={<RomanceBooks />} />
        </Routes>

    </div>
  )
}

export default GenreLinks;