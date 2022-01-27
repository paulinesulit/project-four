// GenreLinks.js

// components

// modules
import { Link } from "react-router-dom";

const GenreLinks = () => {

  return (
    <div>
      <nav className="genreLinks">
          <ul>
            <li>
              
              <Link to='/genre/murder'>
                <img src="/assets/books-murder.png" alt="Murder themed icon" />
                <h3>Murder</h3>
              </Link>
            </li>
            <li>
              <Link to='/genre/fantasy'>
                <img src="/assets/books-fantasy.png" alt="Fantasy themed icon" />
                <h3>Fantasy</h3>
              </Link>
            </li>
            <li>
              <Link to='/genre/romance'>
                <img src="/assets/books-romance.png" alt="Romance themed icon" />
                <h3>Romance</h3>
              </Link>
            </li>
            <li>
              <Link to='/genre/sci-fi'>
                <img src="/assets/books-sci-fi.png" alt="Sci-Fi themed icon" />
                <h3>Sci-Fi</h3>
              </Link>
            </li>
          </ul>
        </nav>

    </div>
  )
}

export default GenreLinks;