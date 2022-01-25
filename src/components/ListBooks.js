// SearchForm.js

const ListBooks = (props) => {
  // console.log(props);
  return (
      <ul>
        {
          props.listOfBooks.map((book) => {
            return (
              <li key={book.id}>
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
                {book.volumeInfo.averageRating === undefined ? <h4>No rating available</h4> : (
                  <h4>{`${book.volumeInfo.averageRating} out of 5 stars`}</h4>
                )}
                {book.volumeInfo.pageCount === undefined ? <h5>Page count unknown</h5> : (
                  <h5>{`${book.volumeInfo.pageCount} pages`}</h5>
                )}
                {book.volumeInfo.description === undefined ? <p>No description available</p> : (
                  <p>{book.volumeInfo.description}</p>
                )}
                {book.volumeInfo.publisher === undefined ? <p>Publisher unavailable</p> : (
                  <p>{book.volumeInfo.publisher}</p>
                )}
                <a
                  href={book.volumeInfo.previewLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read a preview
                </a>
              </li>
            );
          })
        }
      </ul>
  )
}

export default ListBooks;