import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import BooksProject from "../firebaseSetup.js";
import {
  getDatabase,
  onValue,
  ref
} from "firebase/database";
import { useEffect, useState } from "react";

const ReadingListIcon = () => {



const [unreadList, setUnreadList] = useState([]);
  const [readList, setReadList] = useState([]);

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
    },[]);
    onValue(finishedAddress, (response) => {
      if (response.val() === null) {
        setReadList([]);
      } else {
        console.log(response.val());
        setReadList(Object.entries(response.val()));
      }
    },[])
  }, [database]);

    return (
<div>
    <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={faBook} className="bookIcon" aria-hidden="true"/>
        <span className="fa-layers-counter" style={{ background: "Tomato" }} aria-hidden="true">
        {unreadList.length}
        </span>
        </span>

        <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={faBookOpen} className="bookIcon"  aria-hidden="true"/>
        <span className="fa-layers-counter" style={{ background: "Tomato" }} aria-hidden="true">
        {readList.length}
        </span>
    </span>
</div>
);
};

export default ReadingListIcon;
