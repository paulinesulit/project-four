import BooksProject from "../firebaseSetup.js";
import { getDatabase, ref, push } from "firebase/database";
import { auth } from "../firebaseSetup.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";

const AddFromDetails = (props) => {
    const database = getDatabase(BooksProject);
    const [user, loading, error] = useAuthState(auth);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const unreadAddress = ref(database, `${user?.uid}/unreadReadingList`);

    const addBookDetails = (book) => {
        setButtonDisabled(true);
        const bookObject = {
            title: book.object.title,
            author: book.object.authors,
            link: book.object.previewLink,
            jacket: book.object.imageLinks.thumbnail,
            id: book.object.industryIdentifiers[0].identifier
        }
        
        push(unreadAddress, bookObject);
    }

    return (
        <div>
            {!user
                ? <p>Please Login or register to add books</p>
                :
                (buttonDisabled === false)
                    ? <button className='addButton' disabled={buttonDisabled} onClick={() => { addBookDetails(props) }} aria-label="Add book to your reading list">Add to my reading list</button>
                    : <p>Book added to list!</p>

            }
        </div >
    )
}

export default AddFromDetails;