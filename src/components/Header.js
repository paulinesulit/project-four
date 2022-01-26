import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookOpen } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <h1>berks</h1>
      <Link to="/mybooks" aria-label="Click to go to your reading list page">
        My Reading List
      </Link>
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={faBook} className="bookIcon" />
        <span className="fa-layers-counter" style={{ background: "Tomato" }}>
          10
        </span>
      </span>
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={faBookOpen} className="bookIcon" />
        <span className="fa-layers-counter" style={{ background: "Tomato" }}>
          10
        </span>
      </span>
    </header>
  );
};

export default Header;
