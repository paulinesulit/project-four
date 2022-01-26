// SearchBooks.js

// components
import ListBooks from "./ListBooks.js";

// modules
import axios from "axios";
import { useState } from "react";

const SearchBooks = () => {
  const [bookCounter, setBookCounter] = useState(0);

  const [allBooks, setAllBooks] = useState([]);
  // const [userInput, setUserInput] = useState("");
  const [userAuthorInput, setUserAuthorInput] = useState("");
  const [userTitleInput, setUserTitleInput] = useState("");
  
  // const [ifError, setIfError] = useState(false);
  const apiKey = "AIzaSyDISzpyy6ru9PcqSbd86HCj1hJaGHbtbq8";

  const buttonClickCall = () => {
    axios({
      url: "https://www.googleapis.com/books/v1/volumes",
      dataResponse: "json",
      method: "GET",
      params: {
        key: apiKey,
        q: `${userAuthorInput}?${userTitleInput}`,
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

  const getBooksAuthor = (userAuthorInput) => {
    axios({
      url: "https://www.googleapis.com/books/v1/volumes",
      dataResponse: "json",
      method: "GET",
      params: {
        key: apiKey,
        q: `inauthor:${userAuthorInput}`,
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

  const getBooksTitle = (userTitleInput) => {
    axios({
      url: "https://www.googleapis.com/books/v1/volumes",
      dataResponse: "json",
      method: "GET",
      params: {
        key: apiKey,
        q: `intitle:${userTitleInput}`,
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
  const handleInputAuthor = (event) => {
    setUserAuthorInput(event.target.value);
  };
  const handleInputTitle = (event) => {
    setUserTitleInput(event.target.value);
  };



  // handles form submission, calls api using userInput, resets the form to be blank
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (userAuthorInput === "") {
      getBooksTitle(userTitleInput);
    } else {
    getBooksAuthor(userAuthorInput);
    }
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
          <label htmlFor="search">Search by author: </label>
          <input
            type="text"
            id="search"
            onChange={handleInputAuthor}
            value={userAuthorInput}
            placeholder="Try 'Murder'"
          />
          <button>Search</button>
          OR
          <label htmlFor="search">Search by title: </label>
          <input
            type="text"
            id="search"
            onChange={handleInputTitle}
            value={userTitleInput}
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