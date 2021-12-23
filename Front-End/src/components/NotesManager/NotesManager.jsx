import React, { useContext, useEffect, useState } from "react";
import TextContainer from "../TextContainer/TextContainer";
import UserContext from "../../context/User/UserContext";
import styles from "./notesManager.module.css";
import useFetch from "../../hooks/useFetch";
import NotesSelector from "../NotesSelector/NotesSelector";
const NotesManager = () => {
  const user = useContext(UserContext);
  const [clikedID, setClickedID] = useState("none");
  //API
  const [userNotes, setUserNotes] = useState();
  let getNotes = useFetch("http://localhost:3010/note");

  useEffect(() => {
    handleGetNotes();
    document.addEventListener("click", handleSetClickedID);
    return () => {
      document.removeEventListener("click", handleSetClickedID);
    };
  }, []);

  const handleSetClickedID = (e) => {
    console.log(e.target.id);
    setClickedID(e.target.id);
  };

  const handleGetNotes = () => {
    getNotes().then((res) => {
      setUserNotes(res.data);
    });
  };

  return (
    <>
      <main className={styles.mainContainer}>
        <NotesSelector userNotes={userNotes} />
        <TextContainer />
      </main>
    </>
  );
};

export default NotesManager;
