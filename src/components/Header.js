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
            <a href="/">
              <img
                src="/assets/page-turners-logo.png"
                alt="Page Turners logo"
              />
            </a>
          </li>
          <li className="readingListLink">
            <ReadingListIcon />
            <Link
              to="/mybooks"
              aria-label="Click to go to your reading list page"
            >
              My Reading List
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
