import BooksProject from "./../firebaseSetup.js";

import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect } from "react";

const FirebaseData = () => {
  useEffect(() => {
    const database = getDatabase(BooksProject);

    const dbRef = ref(database);

    onValue(dbRef, (response) => {
      console.log(response.val());
      //   added stuff in firebase to see if it works
    });
  }, []);

  return <div></div>;
};

export default FirebaseData;
