import React, { useContext, useEffect, useState } from "react";
import TextContainer from "../TextContainer/TextContainer";
import styles from "./notesManager.module.css";
import useFetch from "../../hooks/useFetch";
import NotesSelector from "../NotesSelector/NotesSelector";
import { BsList } from "react-icons/bs";
import OptionsContext from "../../context/Options/OptionsContext";
import UserContext from "../../context/User/UserContext";
const NotesManager = () => {
  const user = useContext(UserContext);
  const options = useContext(OptionsContext);
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
    options.setID(e.target.id);
  };

  const handleGetNotes = () => {
    getNotes().then((res) => {
      setUserNotes(res.data);
    });
  };

  return (
    <>
      <main className={styles.mainContainer}>
        <NotesSelector
          userNotes={userNotes}
          setInactive={() => {
            setSelectorStatus("inactive");
          }}
        />
        <TextContainer activeNote={user.state.activeNote} />
      </main>
    </>
  );
};

export default NotesManager;
