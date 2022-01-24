// SearchForm.js

const ListBooks = (props) => {
  
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
                <h4>{`${book.volumeInfo.averageRating} out of 5 stars`}</h4>
                <h5>{`${book.volumeInfo.pageCount} pages`}</h5>
                <p>{book.volumeInfo.description}</p>
                <p>{book.volumeInfo.publisher}</p>
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