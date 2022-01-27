import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBook, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import ReadingListIcon from "./ReadingListIcon";

const Header = () => {
  return (
    <header>
      <nav className="wrapper">
        <ul>
          <li className="logo">
            <Link to="/" aria-label="Click to go back to the search">
              <img
                src="/assets/page-turners-logo.png"
                alt="Page Turners logo"
              />
            </Link>
          </li>
          <li>
            <Link
              to="/mybooks"
              aria-label="Click to go to your reading list page"
            >
              My Reading List
            </Link>
            <ReadingListIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
