// RomanceBooks.js

// components
import AddToReadingList from "./AddToReadingList.js";
import GenreLinks from "./GenreLinks.js";

// modules
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const RomanceBooks = () => {

  const apiKey = "AIzaSyDISzpyy6ru9PcqSbd86HCj1hJaGHbtbq8";
  const [bookGenre, setBookGenre] = useState([]);

  useEffect(() => {
    axios({
      url: "https://www.googleapis.com/books/v1/volumes",
      dataResponse: "json",
      method: "GET",
      params: {
        key: apiKey,
        q: 'romance',
        printType: "books",
        maxResults: 10,
      },
    }).then((response) => {
      setBookGenre(response.data.items);
      console.log(response.data.items);
      // setIfError(false);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div>
      <p>hello romance</p>
      <ul>
        {
          bookGenre.map((romanceBook) => {
            return (
              <li key={romanceBook.id}>
                <h2>{romanceBook.volumeInfo.title}</h2>
                {romanceBook.volumeInfo.imageLinks === undefined ? null : (
                  <img
                    src={romanceBook.volumeInfo.imageLinks.thumbnail}
                    alt={romanceBook.volumeInfo.title}
                  />
                )}
                {romanceBook.volumeInfo.authors === undefined ? null : (
                  <h3>{romanceBook.volumeInfo.authors[0]}</h3>
                )}
                {romanceBook.volumeInfo.averageRating === undefined ? <h4>No rating available</h4> : (
                  <h4>{`${romanceBook.volumeInfo.averageRating} out of 5 stars`}</h4>
                )}
                <Link to={`/book/${romanceBook.id}`}>
                  <p aria-label="Click to see book details">See book details</p>
                </Link>
                <AddToReadingList object={romanceBook} />
              </li>
            );
          })
        }
        <GenreLinks />
      </ul>
    </div>
  )
}

export default RomanceBooks;