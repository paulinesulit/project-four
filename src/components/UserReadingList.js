// UserReadingList.js

import BooksProject from "../firebaseSetup.js";
import {
  getDatabase,
  onValue,
  remove,
  ref,
  push,
  get,
} from "firebase/database";
import { useEffect, useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

const UserReadingList = () => {
  const [unreadList, setUnreadList] = useState([]);
  const [readList, setReadList] = useState([]);
  const [userProgress, setUserProgress] = useState(0)

  const database = getDatabase(BooksProject);
 

  useEffect(() => {
    const unreadAddress = ref(database, "unreadReadingList");
    const finishedAddress = ref(database, "finishedReadingList");
    onValue(unreadAddress, (response) => {
      if (response.val() === null) {
        setUnreadList([]);
      } else {
        setUnreadList(Object.entries(response.val()));
      }
    },[])
    onValue(finishedAddress, (response) => {
      if (response.val() === null) {
        setReadList([]);
      } else {
        setReadList(Object.entries(response.val()));
      }
    },[])
  }, [database]);

  const handleRemove = (book) => {
    const database = getDatabase(BooksProject);

    const dbBookAddress = ref(database, `unreadReadingList/${book}`);
    remove(dbBookAddress);
  };

  const handleRemoveRead = (book) => {
    const database = getDatabase(BooksProject);

    const dbBookAddress = ref(database, `finishedReadingList/${book}`);
    remove(dbBookAddress);
  };

  const handleRead = (book) => {
    const database = getDatabase(BooksProject);
    const finishedAddress = ref(database, "finishedReadingList");
    const dbBookAddress = ref(database, `unreadReadingList/${book}`);

    get(dbBookAddress).then((bookInfo) => {
      console.log(bookInfo.val());
      push(finishedAddress, bookInfo.val());
    });

    remove(dbBookAddress);
  };

  
  useEffect(() =>{
    const totalList = unreadList.length + readList.length
    const progress = (readList.length / totalList) * 100
    setUserProgress(progress.toFixed(0))
  }, [readList.length, unreadList.length])


  return (
    <ul>
      <p>Progress: {userProgress}%</p>
      <ProgressBar animated now={userProgress} />
      {unreadList.map((book) => {
        return (
          <li key={book[1].id}>
            <h2>{book[1].title}</h2>
            {book[1].jacket === undefined ? null : (
              <img src={book[1].jacket} alt={book[1].title} />
            )}
            {book[1].author === undefined ? null : <h3>{book[1].author[0]}</h3>}

            <button
              onClick={() => {
                handleRemove(book[0]);
              }}
            >
              Remove
            </button>
            <button
              onClick={() => {
                handleRead(book[0]);
              }}
            >
              Read
            </button>
          </li>
        );
      })}

      {readList.map((book) => {
        return (
          <li key={book}>
            <h2>{book[1].title}</h2>
            {book[1].jacket === undefined ? null : (
              <img src={book[1].jacket} alt={book[1].title} />
            )}
            {book[1].author === undefined ? null : <h3>{book[1].author[0]}</h3>}

            <button
              onClick={() => {
                handleRemoveRead(book[0]);
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default UserReadingList;
