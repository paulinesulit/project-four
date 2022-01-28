// AddToReadingList.js

import BooksProject from "../firebaseSetup.js";
import { getDatabase, ref, push } from "firebase/database";


const AddToReadingList = (props) => {

  const database = getDatabase(BooksProject);
  const unreadAddress = ref(database, 'unreadReadingList');

  const addBook = (book) => {
    const bookObject = {
      id: book.object.id,
      title: book.object.volumeInfo.title,
      author: book.object.volumeInfo.authors,
      link: book.object.volumeInfo.previewLink,
      jacket: book.object.volumeInfo.imageLinks.thumbnail,
    };
    push(unreadAddress, bookObject);
  }
  
  return (
    <button onClick={ () => { addBook(props) }} aria-label="Add book to your reading list">Add to my reading list</button>
  )
}

export default AddToReadingList;