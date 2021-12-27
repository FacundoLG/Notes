import React, { useContext, useEffect, useState } from "react";
import TextContainer from "../TextContainer/TextContainer";
import styles from "./notesManager.module.css";
import useFetch from "../../hooks/useFetch";
import NotesSelector from "../NotesSelector/NotesSelector";
import OptionsContext from "../../context/Options/OptionsContext";
import UserContext from "../../context/User/UserContext";
import { FiMenu } from "react-icons/fi";
const NotesManager = () => {
  const user = useContext(UserContext);
  const options = useContext(OptionsContext);
  //API
  const [userNotes, setUserNotes] = useState();
  const [loading, setIsLoading] = useState();
  const [externalSelectorManager, setExternalSelectorManager] =
    useState("inactive");
  let getNotes = useFetch("https://notesbackendbyfacundolg.herokuapp.com/note");

  useEffect(() => {
    handleGetNotes();
    document.addEventListener("click", handleSetClickedID);
    return () => {
      document.removeEventListener("click", handleSetClickedID);
    };
  }, []);

  // useEffect(() => {
  //   if (user.state.activeNote === null) {
  //     user.setActiveNote(userNotes[0] || null);
  //   }
  // }, [user.state.activeNote]);

  const handleSetClickedID = (e) => {
    options.setID(e.target.id);
  };

  const handleGetNotes = () => {
    setIsLoading(true);
    getNotes()
      .then((res) => {
        setUserNotes(res.data);
      })
      .then(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <header className={styles.header}>
        <FiMenu
          onClick={() => {
            setExternalSelectorManager();
          }}
        />
      </header>
      <main className={styles.mainContainer}>
        <NotesSelector
          userNotes={userNotes}
          setInactive={() => {
            setSelectorStatus("inactive");
          }}
          getNewNotes={() => handleGetNotes()}
          externalSelectorStatus={externalSelectorManager}
        />
        <TextContainer
          getNewNotes={() => handleGetNotes()}
          loadingState={loading}
        />
      </main>
    </>
  );
};

export default NotesManager;
