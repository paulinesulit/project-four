// AddToReadingList.js

import BooksProject from "../firebaseSetup.js";
import { getDatabase, ref, push } from "firebase/database";
import { auth } from "../firebaseSetup.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";

const AddToReadingList = (props) => {
  const [user, loading, error] = useAuthState(auth);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const database = getDatabase(BooksProject);
  const unreadAddress = ref(database, `${user?.uid}/unreadReadingList`);

  const addBook = (book) => {
    setButtonDisabled(true);
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
    <div className="addBookDiv">
    {!user
      ? <p>Please Login or register to add books</p>
      :
        (buttonDisabled === false)
        ? <button className='addButton' disabled ={buttonDisabled} onClick={ () => { addBook(props) }} aria-label="Add book to your reading list">Add to my reading list</button>
        : <p>Book added to list!</p>
      
    }
    </div>
  )
}

export default AddToReadingList;