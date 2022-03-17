// SearchForm.js
import ScrollTop from "./ScrollTop";
import AddToReadingList from "./AddToReadingList";
import { Link } from "react-router-dom";

const ListBooks = (props) => {
  return (
    <ul className="listBooksDiv wrapper">
      {props.listOfBooks.map((book) => {
        const title = book.volumeInfo.title;
        return (
          <div key={book.id}>
            {book.volumeInfo.imageLinks === undefined ? null : (
              <li>
                {book.volumeInfo.imageLinks === undefined ? null : (
                  <div className="imgContainer">
                    <img
                      className="listBooksImg"
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt={book.volumeInfo.title}
                    />
                  </div>
                )}
                <div className="textContainer">
                  {title === undefined ? null : (
                    <h2 className="listBooksTitle">{title.substring(0, 80)}</h2>
                  )}

                  <h3 className="listBooksAuthor">Author(s):</h3>
                  {book.volumeInfo.authors === undefined
                    ? null
                    : book.volumeInfo.authors.map((author, index) => {
                        return (
                          <h3 key={index} className="listBooksAuthor">
                            {author}
                          </h3>
                        );
                      })}
                  {book.volumeInfo.averageRating === undefined ? (
                    <h4 className="listBooksRating">No rating available</h4>
                  ) : (
                    <h4 className="listBooksRating">{`${book.volumeInfo.averageRating} out of 5 stars`}</h4>
                  )}
                  <a
                    className="previewDetailLink"
                    href={book.volumeInfo.previewLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Click to read a preview of the book"
                  >
                    Read a preview
                  </a>
                  <Link to={`/book/${book.id}`}>
                    <p
                      className="previewDetailLink"
                      aria-label="Click to see book details"
                    >
                      See book details
                    </p>
                  </Link>
                  <AddToReadingList object={book} />
                </div>
              </li>
            )}
          </div>
        );
      })}
      <ScrollTop />
    </ul>
  );
};

export default ListBooks;