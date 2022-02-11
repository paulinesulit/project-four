import { Link } from "react-router-dom";

import ReadingListIcon from "./ReadingListIcon";

import { logout } from "../firebaseSetup.js";
const Header = (props) => {
  
  return (
    <header>
      <nav className="wrapper">
        <ul>
          <li className="logo" tabIndex='0'
                role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
            <Link to="/" aria-label="Click to go back to the search">
              <img
                src="/assets/page-turners-logo.png"
                alt="Page Turners logo"
              />
            </Link>
          </li>
          <li className="loginRegisterHeader">
            {!props.user
              ? <> <Link
                to="/login"
                aria-label="Click to login"
              >Login</Link>
                <Link
                  to="/register"
                  aria-label="Click to register"
                >Register</Link> </>
              : <><Link to="/dashboard" aria-label="click to go to user dashboard">Dashboard</Link>
              <Link to="/" onClick={()=>{logout()}}>Logout</Link>
              </>
            }
          </li>
          <li className="readingListLink">
            <Link
              to="/mybooks"
              aria-label="Click to go to your reading list page"
            >
            <ReadingListIcon user={props.user} /> 
              My Reading List
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
