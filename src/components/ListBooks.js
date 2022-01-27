// SearchForm.js

import AddToReadingList from "./AddToReadingList";
import { Link } from "react-router-dom";

const ListBooks = (props) => {
  // console.log(props);
  return (
      <ul>
        {
          props.listOfBooks.map((book) => {
            return (
              <div key={book.id}>
                {book.volumeInfo.imageLinks === undefined ? null : (
                  <li>
                    <h2>{book.volumeInfo.title}</h2>
                    {book.volumeInfo.imageLinks === undefined ? null : (
                      <img
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.volumeInfo.title}
                      />
                    )}
                    {book.volumeInfo.authors === undefined ? null : (
                      <h3>{book.volumeInfo.authors[0]}</h3>
                    )}
                    {book.volumeInfo.averageRating === undefined ? (
                      <h4>No rating available</h4>
                    ) : (
                      <h4>{`${book.volumeInfo.averageRating} out of 5 stars`}</h4>
                    )}
                    {book.volumeInfo.pageCount === undefined ? (
                      <h5>Page count unknown</h5>
                    ) : (
                      <h5>{`${book.volumeInfo.pageCount} pages`}</h5>
                    )}
                    {book.volumeInfo.description === undefined ? (
                      <p>No description available</p>
                    ) : (
                      <p>{book.volumeInfo.description}</p>
                    )}
                    {book.volumeInfo.publisher === undefined ? (
                      <p>Publisher unavailable</p>
                    ) : (
                      <p>{book.volumeInfo.publisher}</p>
                    )}
                    <a
                      href={book.volumeInfo.previewLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Click to read a preview of the book"
                    >
                      Read a preview
                    </a>

                    <Link to={`/book/${book.id}`}>
                      <p aria-label="Click to see book details">See book details</p>
                    </Link>

                    <AddToReadingList object={book} />
                  </li>
                )}
              </div>
            );
          })
        }
      </ul>
  )
}

export default ListBooks;