// Books.js

import axios from "axios";
import { useEffect, useState } from "react"

// api key: AIzaSyDISzpyy6ru9PcqSbd86HCj1hJaGHbtbq8

const Books = () => {

  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {

    axios({
      url: 'https://www.googleapis.com/books/v1/volumes',
      dataResponse: 'json',
      method: 'GET',
      params: {
        key: 'AIzaSyDISzpyy6ru9PcqSbd86HCj1hJaGHbtbq8',
        q: 'science fiction dogs',
        maxResults: 40,
      }
    }).then((response) => {
      setAllBooks(response.data.items);
      console.log(response.data.items);
    })

  }, []);

  return (
    <div>
      <ul>
        {
          allBooks.map((book) => {
            return (
              <div>
                {book.volumeInfo === undefined
                  ? null
                  :
                  (<li key={book.id}>
                    <h2>{book.volumeInfo.title}</h2>
                    <h3>{book.volumeInfo.authors[0]}</h3>
                    <h4>{`${book.volumeInfo.averageRating} out of 5 stars`}</h4>
                    <h5>{`${book.volumeInfo.pageCount} pages`}</h5>
                    {/* <p>{book.searchInfo.textSnippet}</p> */}
                    <p>{book.volumeInfo.description}</p>
                    <p>{book.volumeInfo.publisher}</p>
                    <a href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer">Read a preview</a>

                  </li>)
                }
              </div>
            )
          })
        }
      </ul>
    </div>
  )

}

export default Books;