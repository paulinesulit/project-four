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
      description: book.object.volumeInfo.description,
      pages: book.object.volumeInfo.pageCount,
      link: book.object.volumeInfo.previewLink,
      jacket: book.object.volumeInfo.imageLinks.thumbnail
    }
    push(unreadAddress, bookObject);
    console.log(book)
  }
  
  return (
    <button onClick={ () => { addBook(props) }}>Add to my reading list</button>
  )
}

export default AddToReadingList;