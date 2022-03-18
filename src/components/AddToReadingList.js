// AddToReadingList.js

import BooksProject from "../firebaseSetup.js";
import { getDatabase, ref, push } from "firebase/database";
import { useState } from "react";

const AddToReadingList = (props) => {
  const database = getDatabase(BooksProject);
  const unreadAddress = ref(database, "unreadReadingList");

  const [addToList, setAddToList] = useState(false);

  const addBook = (book) => {
    const bookObject = {
      id: book.object.id,
      title: book.object.volumeInfo.title,
      author: book.object.volumeInfo.authors,
      link: book.object.volumeInfo.previewLink,
      jacket: book.object.volumeInfo.imageLinks.thumbnail,
    };
    push(unreadAddress, bookObject);
    setAddToList(true);
  };

  return (
    <button
      className="addButton"
      onClick={() => {
        addBook(props);
      }}
      aria-label="Add book to your reading list"
    >
      {addToList ? "✓ Added" : "Add to my reading list"}
    </button>
  );
};

export default AddToReadingList;