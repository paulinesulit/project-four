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
          <div className="bookDiv" key={book.id}>
            {book.volumeInfo.imageLinks === undefined ? null : (
              <li>
                {book.volumeInfo.imageLinks === undefined ? null : (
                  <img
                    className="listBooksImg"
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                )}
                <h2 className="listBooksTitle">{title.substring(0, 60)}</h2>
                {book.volumeInfo.authors === undefined ? null : (
                  <h3 className="listBooksAuthor">
                    {book.volumeInfo.authors[0]}
                  </h3>
                )}
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
                  <p className="previewDetailLink" aria-label="Click to see book details">See book details</p>
                </Link>

                <AddToReadingList object={book} />
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