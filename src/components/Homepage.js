// Homepage.js

// components
import GenreLinks from "./GenreLinks.js";
import SearchBooks from "./SearchBooks.js";

const Homepage = () => {
  return (
    <main>
      <section className="wrapper banner">
        <h1>Welcome to Page Turners!</h1>
        <p className="homepageQuote">
          {" "}
          Let others pride themselves about how many pages they have written;
          I'd rather boast about the ones I've read.
        </p>
        <p>- Jorge Luis Borges</p>
      </section>
      <SearchBooks />
      <GenreLinks />
    </main>
  );
};

export default Homepage;