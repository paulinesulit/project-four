// SearchBooks.js

// components
import ListBooks from "./ListBooks.js";

// modules
import axios from "axios";
import { useState } from "react";

const SearchBooks = () => {
  const [bookCounter, setBookCounter] = useState(0);
  const [allBooks, setAllBooks] = useState([]);
  const [firstInputDisabled, setFirstInputDisabled] = useState(false);
  const [secondInputDisabled, setSecondInputDisabled] = useState(false);
  const [userAuthorInput, setUserAuthorInput] = useState("");
  const [userTitleInput, setUserTitleInput] = useState("");

  const buttonClickCall = () => {
    axios({
      url: "https://www.googleapis.com/books/v1/volumes",
      dataResponse: "json",
      method: "GET",
      params: {
        key: `${process.env.REACT_APP_API_KEY}`,
        q: `${userAuthorInput}?${userTitleInput}`,
        printType: "books",
        maxResults: 20,
        startIndex: bookCounter,
      },
    }).then((response) => {
      setAllBooks(response.data.items);
    });
  };

  const getBooksAuthor = (userAuthorInput) => {
    axios({
      url: "https://www.googleapis.com/books/v1/volumes",
      dataResponse: "json",
      method: "GET",
      params: {
        key: `${process.env.REACT_APP_API_KEY}`,
        q: `inauthor:${userAuthorInput}`,
        printType: "books",
        maxResults: 20,
        startIndex: bookCounter,
      },
    })
      .then((response) => {
        setAllBooks(response.data.items);
      })
      .catch((error) => {
        alert("Try different search queries");
      });
  };

  const getBooksTitle = (userTitleInput) => {
    axios({
      url: "https://www.googleapis.com/books/v1/volumes",
      dataResponse: "json",
      method: "GET",
      params: {
        key: `${process.env.REACT_APP_API_KEY}`,
        q: `intitle:${userTitleInput}`,
        printType: "books",
        maxResults: 20,
        startIndex: bookCounter,
      },
    })
      .then((response) => {
        setAllBooks(response.data.items);
      })
      .catch((error) => {
        // alert("Try different search queries");
      });
  };

  // get the users input from the search field
  const handleInputAuthor = (event) => {
    setUserAuthorInput(event.target.value);
    if (event.target.value.length > 0) {
      setSecondInputDisabled(true);
    } else {
      setSecondInputDisabled(false);
    }
  };
  const handleInputTitle = (event) => {
    setUserTitleInput(event.target.value);
    if (event.target.value.length > 0) {
      setFirstInputDisabled(true);
    } else {
      setFirstInputDisabled(false);
    }
  };

  // handles form submission, calls api using userInput, resets the form to be blank
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (userAuthorInput === "") {
      getBooksTitle(userTitleInput);
    } else {
      getBooksAuthor(userAuthorInput);
    }
    setBookCounter(0);
    // setUserInput("");
    // setCategoryInput("");
  };

  const handleClickNext = () => {
    setBookCounter(bookCounter + 20);
    buttonClickCall();
  };

  const handleClickBack = () => {
    setBookCounter(bookCounter - 20);
    buttonClickCall();
  };

  return (
    <div>
      <section className="searchContainer">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="search">Search by author: </label>
          <input
            type="text"
            id="search"
            onChange={handleInputAuthor}
            value={userAuthorInput}
            placeholder="Books by authors"
            aria-required="true"
            disabled={firstInputDisabled}
          />
          <button aria-label="Submit query for books by author">Search</button>
          <p>OR</p>
          <label htmlFor="search">Search by title: </label>
          <input
            type="text"
            id="search"
            onChange={handleInputTitle}
            value={userTitleInput}
            placeholder="Try 'Murder'"
            aria-required="true"
            disabled={secondInputDisabled}
          />
          <button aria-label="Submit query for books by title">Search</button>
        </form>
      </section>

      <section>
        {allBooks ? <ListBooks listOfBooks={allBooks} /> : null}
        {allBooks === undefined ? (
          <p className="errorNoResults">No results</p>
        ) : allBooks.length > 0 ? (
          bookCounter === 0 ? (
            <button
              className="nextBtn"
              onClick={handleClickNext}
              aria-label="Go to the next page of books"
            >
              {" "}
              Next
            </button>
          ) : (
            <div className="paginationButtons">
              <button
                className="prevBtn"
                onClick={handleClickBack}
                aria-label="Go to the previous page of books"
              >
                {" "}
                Back
              </button>
              <button
                className="nextBtn"
                onClick={handleClickNext}
                aria-label="Go to the next page of books"
              >
                {" "}
                Next
              </button>
            </div>
          )
        ) : null}
      </section>
    </div>
  );
};

export default SearchBooks;