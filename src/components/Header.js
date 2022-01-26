import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>berks</h1>
      <Link to="/mybooks">My Reading List</Link>
    </header>
  );
};

export default Header;
