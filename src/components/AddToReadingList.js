// AddToReadingList.js

import BooksProject from "../firebaseSetup.js";
import { getDatabase, ref, push } from "firebase/database";
import { auth } from "../firebaseSetup.js";
import { useAuthState } from "react-firebase-hooks/auth";

const AddToReadingList = (props) => {
  const [user, loading, error] = useAuthState(auth);
  const database = getDatabase(BooksProject);
  const unreadAddress = ref(database, `${user?.uid}/unreadReadingList`);

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
    <button className='addButton' onClick={ () => { addBook(props) }} aria-label="Add book to your reading list">Add to my reading list</button>
  )
}

export default AddToReadingList;