import { useEffect, useState } from "react";
import axios from "axios";

const PageButton = (props) => {
  const [bookCounter, setBookCounter] = useState(10);
  const [allBooks, setAllBooks] = useState([]);
  const [ifError, setIfError] = useState(false);
  const apiKey = "AIzaSyDISzpyy6ru9PcqSbd86HCj1hJaGHbtbq8";

  useEffect(() => {
    axios({
      url: "https://www.googleapis.com/books/v1/volumes",
      dataResponse: "json",
      method: "GET",
      params: {
        key: apiKey,
        q: `${props.searchTerm}+subject:${props.categoryTerm}`,
        printType: "books",
        maxResults: 10,
        startIndex: bookCounter,
      },
    }).then((response) => {
      setAllBooks(response.data.items);
      console.log(response.data.items);
      // setIfError(false);
    });
  }, [bookCounter]);

  const handleClickNext = () => {
    setBookCounter(bookCounter + 10);
    // pagination(bookCounter);
  };

  const handleClickBack = () => {
    setBookCounter(bookCounter - 10);
    // pagination(bookCounter);
  };

  return (
    <div>
      {/* {console.log(bookCounter)} */}

      {bookCounter === 10 ? (
        <button onClick={handleClickNext}> Next</button>
      ) : (
        <div>
          <button onClick={handleClickBack}> Back</button>
          <button onClick={handleClickNext}> Next</button>
        </div>
      )}
    </div>
  );
};

export default PageButton;
// On forwards button have an onClick event with a function that increases pageCounter (i.e setPageCounter) by the number of books we want to skip from the first call i.e if the first page shows 10 books we want our bookCounter to go up by 10, and have our list on the next page start on the 11th book. I haven't taken a look at how the google books API does pages but im sure there's a query that we can manipulate to have our results have pages.
// On backwards button we need to have an onClick event with a function that decreases pageCounter and does an API call with the decreased pageCounter number, so an opposite function of the forward click event function
// both the backward and forward click functions will have api calls within them. So far we have 4 api calls being constructed not including the ones for genres
