// FantasyBooks.js

// modules
import { useEffect, useState } from "react";
import axios from "axios";

const FantasyBooks = () => {

  const apiKey = "AIzaSyDISzpyy6ru9PcqSbd86HCj1hJaGHbtbq8";
  const [bookGenre, setBookGenre] = useState([]);

  useEffect(() => {
    axios({
      url: "https://www.googleapis.com/books/v1/volumes",
      dataResponse: "json",
      method: "GET",
      params: {
        key: apiKey,
        q: 'fantasy',
        printType: "books",
        maxResults: 10,
      },
    }).then((response) => {
      setBookGenre(response.data.items);
      console.log(response.data.items);
      // setIfError(false);
    });
  }, []);


  return (
    <div>
      <p>hello fantasy</p>
      <ul>
        {
          bookGenre.map((fantasyBook) => {
            return (
              <li key={fantasyBook.id}>
                <h2>{fantasyBook.volumeInfo.title}</h2>
                {fantasyBook.volumeInfo.imageLinks === undefined ? null : (
                  <img
                    src={fantasyBook.volumeInfo.imageLinks.thumbnail}
                    alt={fantasyBook.volumeInfo.title}
                  />
                )}
                {fantasyBook.volumeInfo.authors === undefined ? null : (
                  <h3>{fantasyBook.volumeInfo.authors[0]}</h3>
                )}
                {fantasyBook.volumeInfo.averageRating === undefined ? <h4>No rating available</h4> : (
                  <h4>{`${fantasyBook.volumeInfo.averageRating} out of 5 stars`}</h4>
                )}
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}

export default FantasyBooks;