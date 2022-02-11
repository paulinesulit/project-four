import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import BooksProject from "../firebaseSetup.js";
import {
  getDatabase,
  onValue,
  ref
} from "firebase/database";
import { useEffect, useState } from "react";
import { auth } from "../firebaseSetup.js";
import { useAuthState } from "react-firebase-hooks/auth";

const ReadingListIcon = (props) => {

  const [unreadList, setUnreadList] = useState([]);
  const [readList, setReadList] = useState([]);

  const database = getDatabase(BooksProject);
  const [user, loading, error] = useAuthState(auth);  

  useEffect(() => {
    const unreadAddress = ref(database, `${props.user?.uid}/unreadReadingList`);
    const finishedAddress = ref(database, `${props.user?.uid}/finishedReadingList`);
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
        setReadList(Object.entries(response.val()));
      }
    },[])
  }, [database, props.user]);

  return (
    <div className="bookIconsDiv">
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
