// SearchBooks.js

// components
import ListBooks from "./ListBooks.js";

// modules
import axios from "axios";
import { useEffect, useState } from "react"


const SearchBooks = () => {

  const [allBooks, setAllBooks] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');
  const [ifError, setIfError] = useState(false);
  const apiKey = 'AIzaSyDISzpyy6ru9PcqSbd86HCj1hJaGHbtbq8'

  const getBooks = (userInput, categoryInput) => {

    axios({
      url: 'https://www.googleapis.com/books/v1/volumes',
      dataResponse: 'json',
      method: 'GET',
      params: {
        key: apiKey,
        q: `${userInput}+subject:${categoryInput}`,
        printType: 'books',
        maxResults: 10,
      }
    }).then( (response) => {
      setAllBooks(response.data.items);
      console.log(response.data.items);
      // setIfError(false);
    }).catch( (error) => {
      console.log(error);
      prompt('Network Error, please refresh and try again');
    })
  };

  // get the users input from the search field
  const handleInput = (event) => {
    setUserInput(event.target.value);
  }
  // get the users input from the search field
  const handleCategoryInput = (event) => {
    setCategoryInput(event.target.value);
  }

  // handles form submission, calls api using userInput, resets the form to be blank
  const handleFormSubmit = (event) => {
    event.preventDefault();
    getBooks(userInput, categoryInput);
    setUserInput('');
    setCategoryInput('');
  }

  return (   
    <div>
      <section>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="search">Search by keyword, title or author: </label>
          <input type="text" id="search" onChange={handleInput} value={userInput} placeholder="Try 'Murder'" />
          <label htmlFor="">Add a genre to narrow your results: </label>
          <input type="text" id="categorySearch" onChange={handleCategoryInput} value={categoryInput} placeholder="Try 'Mystery'"/>
          <button>Search</button>
        </form>
      </section>

      <main>
        {
          allBooks ?
          (
            <ListBooks 
              listOfBooks={allBooks}
            />
          ) : (
            null
          )
        }
        {
        allBooks === undefined ?
          (
            <p>No results</p>
          ) : (
            null
          )
        }
        
      </main>

    </div>
  )

}

export default SearchBooks;