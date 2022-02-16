import { Link } from "react-router-dom";
import ReadingListIcon from "./ReadingListIcon";

const Header = () => {
  return (
    <header>
      <nav className="wrapper">
        <ul>
          <li
            className="logo"
            tabIndex="0"
            role="tab"
            aria-selected="true"
            aria-controls="tabpanel-id"
            id="tab-id"
          >
            <Link to="/" aria-label="Click to go back to the search">
              <img
                src="/assets/page-turners-logo.png"
                alt="Page Turners logo"
              />
            </Link>
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
