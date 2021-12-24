import { useEffect, useState } from "react";
import { FiMenu, FiPlusSquare } from "react-icons/fi";

import NoteCard from "../NoteCard/NoteCard";
import Loading from "../../assets/svgs/Loading/Loading.jsx";
import styles from "./notesSelector.module.css";

const NotesSelector = ({ userNotes, selectorStatus, setInactive }) => {
  const [notes, setNotes] = useState(null);
  const [notesLoading, setNotesLoading] = useState(true);
  const [activeNoteID, setActiveNoteID] = useState();

  useEffect(() => {
    if (!activeNoteID && notes) {
      setActiveNoteID(notes[0]?._id);
    }
  }, [notes, activeNoteID]);

  useEffect(() => {
    const selector = document.getElementById("noteSelector");
    selector.addEventListener("click", handleSetActiveNoteID);
    setNotes(userNotes);
    setNotesLoading(false);
    return () => {
      selector.removeEventListener("click", handleSetActiveNoteID);
    };
  }, [userNotes, selectorStatus]);

  const handleSetActiveNoteID = (e) => {
    setActiveNoteID(e.target.id);
    if (e.target.id === "noteSelector") {
      setInactive();
    }
  };
  return (
    <>
      <div
        id="noteSelector"
        className={`${styles.notesSelector} 
             ${selectorStatus == "inactive" && styles.inactiveNoteSelector}`}
      >
        <div className={styles.notesContainer}>
          {notesLoading ? (
            <div className={styles.Message}>
              <Loading size={55} />
            </div>
          ) : notes?.length > 0 ? (
            <>
              {notes?.map((data) => (
                <NoteCard
                  key={data._id}
                  noteData={data}
                  isActive={data._id === activeNoteID}
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
    </>
  );
};

export default NotesSelector;
