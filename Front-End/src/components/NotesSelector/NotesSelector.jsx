import { useEffect, useState } from "react";
import { FiMenu, FiPlusSquare } from "react-icons/fi";

import NoteCard from "../NoteCard/NoteCard";
import Loading from "../../assets/svgs/Loading/Loading.jsx";
import styles from "./notesSelector.module.css";

const NotesSelector = ({ userNotes }) => {
  const [notes, setNotes] = useState(null);
  const [notesLoading, setNotesLoading] = useState(true);
  const [activeID, setActiveID] = useState();
  useEffect(() => {
    const selector = document.getElementById("noteSelector");
    selector.addEventListener("click", handleSetActiveID);
    return () => {
      selector.removeEventListener("click", handleSetActiveID);
    };
  }, []);

  useEffect(() => {
    userNotes && setNotes(userNotes);
    setNotesLoading(false);
  }, [userNotes]);

  const handleSetActiveID = (e) => {
    setActiveID(e.target.id);
  };
  return (
    <div
      id="noteSelector"
      className={`${styles.notesSelector} 
        `}
      // ${
      //   notesSelectorStatus == "inactive" && styles.inactiveNoteSelector
      // }
    >
      <div className={styles.notesContainer}>
        {notesLoading ? (
          <div className={styles.Message}>
            <Loading />
          </div>
        ) : notes?.length > 0 ? (
          <>
            {notes?.map((data) => (
              <NoteCard
                key={data._id}
                noteData={data}
                isActive={data._id === activeID}
              />
            ))}
            <FiPlusSquare className={styles.PlusIcon} />
          </>
        ) : (
          <div className={styles.Message}>
            <p>You don't have notes, create a new one</p>
            <FiPlusSquare className={styles.PlusIcon} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesSelector;
