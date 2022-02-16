// SciFiBooks.js

// components
import AddToReadingList from "./AddToReadingList.js";
import ScrollTop from "./ScrollTop.js";

//modules
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SciFiBooks = () => {
  const [bookGenre, setBookGenre] = useState([]);

  useEffect(() => {
    axios({
      url: "https://www.googleapis.com/books/v1/volumes",
      dataResponse: "json",
      method: "GET",
      params: {
        key: `${process.env.REACT_APP_API_KEY}`,
        q: "science fiction",
        printType: "books",
        maxResults: 10,
      },
    }).then((response) => {
      setBookGenre(response.data.items);
      // setIfError(false);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wrapper">
      <h1>Sci-fi books, you say?</h1>
      <ul className="genreBooks">
        {bookGenre.map((sciFiBook) => {
          const title = sciFiBook.volumeInfo.title;
          return (
            <li key={sciFiBook.id}>
              {sciFiBook.volumeInfo.imageLinks === undefined ? null : (
                <img
                  src={sciFiBook.volumeInfo.imageLinks.thumbnail}
                  alt={sciFiBook.volumeInfo.title}
                />
              )}
              <h2>{title.substring(0, 30)}</h2>
              {sciFiBook.volumeInfo.authors === undefined ? null : (
                <h3>{sciFiBook.volumeInfo.authors[0]}</h3>
              )}
              {sciFiBook.volumeInfo.averageRating === undefined ? (
                <h4>No rating available</h4>
              ) : (
                <h4>{`${sciFiBook.volumeInfo.averageRating} out of 5 stars`}</h4>
              )}

              <Link to={`/book/${sciFiBook.id}`}>
                <p
                  className="previewDetailLink"
                  aria-label="Click to see book details"
                >
                  See book details
                </p>
              </Link>

              <AddToReadingList object={sciFiBook} />
            </li>
          );
        })}
      </ul>
      <ScrollTop />
    </div>
  );
};

export default SciFiBooks;