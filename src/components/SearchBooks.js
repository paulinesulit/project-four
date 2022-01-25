// SearchBooks.js

// components
import ListBooks from "./ListBooks.js";

// modules
import axios from "axios";
import { useEffect, useState } from "react";

const SearchBooks = () => {
  const [bookCounter, setBookCounter] = useState(0);

  const [allBooks, setAllBooks] = useState([]);
  const [userInput, setUserInput] = useState("");
  
  // const [ifError, setIfError] = useState(false);
  const apiKey = "AIzaSyDISzpyy6ru9PcqSbd86HCj1hJaGHbtbq8";

  const buttonClickCall = () => {
    axios({
      url: "https://www.googleapis.com/books/v1/volumes",
      dataResponse: "json",
      method: "GET",
      params: {
        key: apiKey,
        q: `${userInput}`,
        printType: "books",
        maxResults: 10,
        startIndex: bookCounter,
      },
    }).then((response) => {
      setAllBooks(response.data.items);
      console.log(response.data.items);
      // setIfError(false);
    });
  }

  const getBooks = (userInput) => {
    axios({
      url: "https://www.googleapis.com/books/v1/volumes",
      dataResponse: "json",
      method: "GET",
      params: {
        key: apiKey,
        q: `${userInput}`,
        printType: "books",
        maxResults: 10,
        startIndex: bookCounter
      },
    })
      .then((response) => {
        setAllBooks(response.data.items);
        // console.log(response.data.items);
        // setIfError(false);
        console.log(bookCounter);
      })
      .catch((error) => {
        console.log(error);
        alert("Try different search queries");
      });
  };

  // get the users input from the search field
  const handleInput = (event) => {
    setUserInput(event.target.value);
  };


  // handles form submission, calls api using userInput, resets the form to be blank
  const handleFormSubmit = (event) => {
    event.preventDefault();
    getBooks(userInput);
    setBookCounter(10);
    // setUserInput("");
    // setCategoryInput("");
  };

  const handleClickNext = () => {
    setBookCounter(bookCounter + 10);
    console.log(bookCounter);
    buttonClickCall();
  };

  const handleClickBack = () => {
    setBookCounter(bookCounter - 10);
    console.log(bookCounter);
    buttonClickCall();
  };

  return (
    <div>
      <section>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="search">Search by keyword, title or author: </label>
          <input
            type="text"
            id="search"
            onChange={handleInput}
            value={userInput}
            placeholder="Try 'Murder'"
          />
          <button>Search</button>
        </form>
      </section>

      <main>
        {allBooks ? <ListBooks listOfBooks={allBooks} /> : null}
        {allBooks === undefined ? <p>No results</p> : null}
        {allBooks.length > 0 ? (
          bookCounter === 0 ? (
            <button onClick={handleClickNext}> Next</button>
          ) : (
            <div>
              <button onClick={handleClickBack}> Back</button>
              <button onClick={handleClickNext}> Next</button>
            </div>
          )
        ) : null}
      </main>
    </div>
  );
};

export default SearchBooks;