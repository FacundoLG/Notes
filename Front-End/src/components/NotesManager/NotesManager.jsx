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
  const [selectorStatus, setSelectorStatus] = useState("active");
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
      })
      .catch((data) => {
        console.log(data);
        localStorage.setItem("NotesTKN", null);
        user.setUserInfo(null);
      });
  };
  return (
    <>
      <header className={styles.header}>
        <FiMenu
          className={styles.FiMenu}
          onClick={() => {
            setSelectorStatus(
              selectorStatus == "active" ? "inactive" : "active"
            );
          }}
        />
      </header>
      <main className={styles.mainContainer}>
        <NotesSelector
          userNotes={userNotes}
          getNewNotes={() => handleGetNotes()}
          sendSelectorStatus={(newStatus) => setSelectorStatus(newStatus)}
          selectorStatus={selectorStatus}
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
