import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import ReadingListIcon from "./ReadingListIcon";

const Header = () => {
  return (
    <header>
      <h1>berks</h1>
      <Link to="/mybooks" aria-label="Click to go to your reading list page">
        My Reading List
      </Link>
      <ReadingListIcon />

    </header>
  );
};

export default Header;
