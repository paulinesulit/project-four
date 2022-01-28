// Homepage.js

// components

import GenreLinks from "./GenreLinks.js";
import SearchBooks from "./SearchBooks.js";

const Homepage = () => {
  return (
    <main>
      <section className="wrapper banner">
        <h1>Welcome to Page Turners!</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, magni nemo expedita, vitae animi facilis adipisci neque et facere quibusdam quod fugit quos sed, ea minus? Minima modi quae dolor.</p>
      </section>
      <SearchBooks />
      <GenreLinks />
      
    </main>
  )
}

export default Homepage;