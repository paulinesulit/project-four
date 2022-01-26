// UserReadingList.js

import BooksProject from "../firebaseSetup.js";
import { getDatabase, onValue, remove, ref, push } from "firebase/database";
import { useEffect, useState } from "react";

const UserReadingList = () => {

const [ unreadList, setUnreadList ] = useState([])

  const database = getDatabase(BooksProject);
  const unreadAddress = ref(database, 'unreadReadingList');
  const finishedAddress = ref(database, 'finishedReadingList');

useEffect(() => {
  onValue(unreadAddress, (response) => {
    if (response.val() === null) {
      setUnreadList([]);
    } else {
      setUnreadList(Object.entries(response.val()));
    }
  });
}, [database]);

const handleRemove = (book) => {
  const database = getDatabase(BooksProject);

  const dbBookAddress = ref(database, `unreadReadingList/${book}`);
  remove(dbBookAddress);
};

return (
  <div>
    {unreadList.map((book) => {
      return (
        <li key={book[1].id}>
          <h2>{book[1].title}</h2>
          {book[1].jacket === undefined ? null : (
            <img src={book[1].jacket} alt={book[1].title} />
          )}
          {book[1].author === undefined ? null : <h3>{book[1].author[0]}</h3>}

          {book[1].pages === undefined ? (
            <h5>Page count unknown</h5>
          ) : (
            <h5>{`${book[1].pages} pages`}</h5>
          )}

          <button
            onClick={() => {
              handleRemove(book[0]);
            }}
          >
            Remove
          </button>
        </li>
      );
    })}
  </div>
);
}

export default UserReadingList;