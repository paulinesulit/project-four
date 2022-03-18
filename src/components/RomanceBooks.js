// RomanceBooks.js

// components
import AddToReadingList from "./AddToReadingList.js";
import ScrollTop from "./ScrollTop.js";

// modules
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RomanceBooks = () => {
  const [bookGenre, setBookGenre] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      url: "https://www.googleapis.com/books/v1/volumes",
      dataResponse: "json",
      method: "GET",
      params: {
        key: `${process.env.REACT_APP_API_KEY}`,
        q: "romance",
        printType: "books",
        maxResults: 10,
      },
    }).then((response) => {
      setBookGenre(response.data.items);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wrapper">
      <h1>Romance books, you say?</h1>
      <ul className="genreBooks">
        {loading ? (
          <div className="loader"></div>
        ) : (
          bookGenre.map((romanceBook) => {
            const title = romanceBook.volumeInfo.title;
            return (
              <li key={romanceBook.id}>
                {romanceBook.volumeInfo.imageLinks === undefined ? null : (
                  <img
                    src={romanceBook.volumeInfo.imageLinks.thumbnail}
                    alt={romanceBook.volumeInfo.title}
                  />
                )}
                <AddToReadingList object={romanceBook} />
                <Link to={`/book/${romanceBook.id}`}>
                  <p
                    className="previewDetailLink"
                    aria-label="Click to see book details"
                  >
                    See book details
                  </p>
                </Link>

                <h2>{title.substring(0, 30)}</h2>
                <h3 className="listBooksAuthor">Author(s):</h3>
                {romanceBook.volumeInfo.authors === undefined
                  ? null
                  : romanceBook.volumeInfo.authors.map((author, index) => {
                      return (
                        <h3 key={index} className="listBooksAuthor">
                          {author}
                        </h3>
                      );
                    })}
                {romanceBook.volumeInfo.averageRating === undefined ? (
                  <h4>No rating available</h4>
                ) : (
                  <h4>{`${romanceBook.volumeInfo.averageRating} out of 5 stars`}</h4>
                )}
              </li>
            );
          })
        )}
      </ul>
      <ScrollTop />
    </div>
  );
};

export default RomanceBooks;