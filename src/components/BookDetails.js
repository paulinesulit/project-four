// BookDetails.js

//components
import AddFromDetails from "./AddFromDetails.js";
//modules
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";



const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    axios({
      url: `https://www.googleapis.com/books/v1/volumes/${bookId}`,
      dataResponse: "json",
      method: "GET",
      params: {
        key: `${process.env.REACT_APP_API_KEY}`,
      },
    }).then((response) => {
      setBook(response.data.volumeInfo);
    });
  }, [bookId]);

  return (
    <div className="wrapper">
      <div className="bookDetails">
        <h2>{book.title}</h2>
        {book.imageLinks === undefined ? null : (
          <img
            className="bookDetailImg"
            src={book.imageLinks.thumbnail}
            alt={book.title}
          />
        )}
        {book.authors === undefined ? null : <h3>{book.authors[0]}</h3>}
        {book.averageRating === undefined ? (
          <h4>No rating available</h4>
        ) : (
          <h4>{`${book.averageRating} out of 5 stars`}</h4>
        )}
        {book.pageCount === undefined ? (
          <h5>Page count unknown</h5>
        ) : (
          <h5>{`${book.pageCount} pages`}</h5>
        )}
        {book.description === undefined ? (
          <p>No description available</p>
        ) : (
          <p>{book.description}</p>
        )}
        {book.publisher === undefined ? (
          <p>Publisher unavailable</p>
        ) : (
          <p>{book.publisher}</p>
        )}
        <div className="reviewBtn">
          <a
            className="readReview"
            href={book.previewLink}
            target="_blank"
            rel="noreferrer"
          >
            Read a preview
          </a>
        </div>
        <AddFromDetails object={book} />
      </div>
    </div>
  );
};

export default BookDetails;