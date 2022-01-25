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
    setUnreadList(response.val())
  });
},[database])

  return (
    <div>

    </div>
  )
}

export default UserReadingList;