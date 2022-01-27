import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { userProgress } from "./UserReadingList.js";
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

const ReadingListIcon = () => {



const [unreadList, setUnreadList] = useState([]);
  const [readList, setReadList] = useState([]);

  const database = getDatabase(BooksProject);
  const unreadAddress = ref(database, "unreadReadingList");
  const finishedAddress = ref(database, "finishedReadingList");

  useEffect(() => {
    onValue(unreadAddress, (response) => {
      if (response.val() === null) {
        setUnreadList([]);
      } else {
        setUnreadList(Object.entries(response.val()));
      }
    });
    onValue(finishedAddress, (response) => {
      if (response.val() === null) {
        setReadList([]);
      } else {
        console.log(response.val());
        setReadList(Object.entries(response.val()));
      }
    });
  }, [database]);

    return (
<div>
    <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={faBook} className="bookIcon" />
        <span className="fa-layers-counter" style={{ background: "Tomato" }}>
        {unreadList.length}
        </span>
        </span>

        <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={faBookOpen} className="bookIcon" />
        <span className="fa-layers-counter" style={{ background: "Tomato" }}>
        {readList.length}
        </span>
    </span>
</div>
);
};

export default ReadingListIcon;
