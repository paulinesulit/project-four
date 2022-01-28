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
import ProgressBar from 'react-bootstrap/ProgressBar';
import ScrollTop from "./ScrollTop.js";

const UserReadingList = () => {
  const [unreadList, setUnreadList] = useState([]);
  const [readList, setReadList] = useState([]);
  const [userProgress, setUserProgress] = useState(0)

  const database = getDatabase(BooksProject);


  useEffect(() => {
    const unreadAddress = ref(database, "unreadReadingList");
    const finishedAddress = ref(database, "finishedReadingList");

    const stopUnreadSubFunction = onValue(unreadAddress, (response) => {
      if (response.val() === null) {
        setUnreadList([]);
      } else {
        setUnreadList(Object.entries(response.val()));
      }
    })

    const stopFinishedSubFunction = onValue(finishedAddress, (response) => {
      if (response.val() === null) {
        setReadList([]);
      } else {
        setReadList(Object.entries(response.val()));
      }
    })
    return () => {
      stopFinishedSubFunction();
      stopUnreadSubFunction();
    }

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
      push(finishedAddress, bookInfo.val());
    });

    remove(dbBookAddress);
  };
  
  useEffect(() => {
    const totalList = unreadList.length + readList.length
    if (readList.length === 0 && unreadList.length === 0) {
      setUserProgress(0)
    } else {
      const progress = (readList.length / totalList) * 100
      setUserProgress(progress.toFixed(0))
    }
  }, [readList.length, unreadList.length])

  const resetList = () => {
    const finishedAddress = ref(database, "finishedReadingList");
    remove(finishedAddress);
    const dbBookAddress = ref(database, "unreadReadingList");    
    remove(dbBookAddress);
  }

  return (
      <div className='wrapper progressBarButton'>
        <p aria-label="The percentage of books you have read on your reading list">Progress: {userProgress}%</p>
        <ProgressBar animated now={userProgress} />

        <button onClick={resetList} aria-label="Clear books from my reading list">Clear My Reading List</button>
    

      <ul className="readingList">
        
        {unreadList.map((book) => {
          return (
            <div className="wrapper">
            <li key={book[0]}>
              {book[1].jacket === undefined ? null : (
                <img src={book[1].jacket} alt={book[1].title} />
              )}
              <h2>{book[1].title}</h2>
              {book[1].author === undefined ? null : <h3>{book[1].author[0]}</h3>}
              <button aria-label="Remove book from reading list"
                onClick={() => {
                  handleRemove(book[0]);
                }}
              >
                Remove
              </button>
              <button aria-label="List book as read on your reading list"
                onClick={() => {
                  handleRead(book[0]);
                }}
              >
                Read
              </button>
            </li>
          </div>
          );
        })}
        {readList.map((book) => {
          return (
            <li className="readBook" key={book}>
              {book[1].jacket === undefined ? null : (
                <img src={book[1].jacket} alt={book[1].title} />
              )}
              <h2>{book[1].title}</h2>
              {book[1].author === undefined ? null : <h3>{book[1].author[0]}</h3>}
              <button  aria-label="Remove read book from list"
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
      <ScrollTop />
      
    </div>
  );
};

export default UserReadingList;
