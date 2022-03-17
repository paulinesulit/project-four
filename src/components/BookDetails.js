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
    })
      .then((response) => {
        setBook(response.data.volumeInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [bookId]);

  return (
    <div className="wrapper">
      <h2>{book.title}</h2>
      <div className="bookDetails">
        <div className="imgContainer">
          {book.imageLinks === undefined ? null : (
            <img
              className="bookDetailImg"
              src={book.imageLinks.thumbnail}
              alt={book.title}
            />
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
        <div className="textContainer">
          <h3 className="listBooksAuthor">Author(s):</h3>
          {book.authors === undefined
            ? null
            : book.authors.map((author, index) => {
                return (
                  <h3 key={index} className="listBooksAuthor">
                    {author}
                  </h3>
                );
              })}
          {book.publisher === undefined ? (
            <p>Publisher unavailable</p>
          ) : (
            <p>Publisher: {book.publisher}</p>
          )}
          {book.averageRating === undefined ? (
            <h4 className="listBooksRating">No rating available</h4>
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
        </div>
      </div>
    </div>
  );
};

export default BookDetails;