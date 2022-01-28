// GenreLinks.js

// components

// modules
import { Link } from "react-router-dom";

const GenreLinks = () => {
  return (
    <div className="wrapper">
      <nav>
        <ul className="genreLinks">
          <li>
            <Link to="/genre/murder">
              <img
                src="/assets/books-murder.png"
                alt="Murder themed icon"
                aria-label="Click to view murder themed books"
              />
              <h3>Murder</h3>
            </Link>
          </li>
          <li>
            <Link to="/genre/fantasy">
              <span>
                <img
                  src="/assets/books-fantasy.png"
                  alt="Fantasy themed icon"
                  aria-label="Click to view fantasy themed books"
                />
                <h3>Fantasy</h3>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/genre/romance">
              <img
                src="/assets/books-romance.png"
                alt="Romance themed icon"
                aria-label="Click to view romance themed books"
              />
              <h3>Romance</h3>
            </Link>
          </li>
          <li>
            <Link to="/genre/sci-fi">
              <span>
                <img
                  src="/assets/books-sci-fi.png"
                  alt="Sci-Fi themed icon"
                  aria-label="Click to view sci-fi themed books"
                />
                <h3>Sci-Fi</h3>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default GenreLinks;