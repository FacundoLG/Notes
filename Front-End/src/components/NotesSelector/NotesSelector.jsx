import { useEffect, useState } from "react";
import { FiMenu, FiPlusSquare } from "react-icons/fi";
import NoteCard from "../NoteCard/NoteCard";
import Loading from "../../assets/svgs/Loading/Loading.jsx";
import styles from "./notesSelector.module.css";

const NotesSelector = ({ userNotes }) => {
  const [notes, setNotes] = useState(null);
  const [notesLoading, setNotesLoading] = useState(true);
  const [activeNoteID, setActiveNoteID] = useState();
  const [selectorStatus, setSelectorStatus] = useState("inactive");

  useEffect(() => {
    if (!activeNoteID && notes) {
      setActiveNoteID(notes[0]?._id);
    }
  }, [notes, activeNoteID]);

  useEffect(() => {
    const selector = document.getElementById("noteSelector");
    selector.addEventListener("click", handleSetActiveNoteID);
    setNotes(userNotes);
    setTimeout(() => {
      setNotesLoading(false);
    }, 800);
    return () => {
      selector.removeEventListener("click", handleSetActiveNoteID);
    };
  }, [userNotes, selectorStatus]);

  const handleSetActiveNoteID = (e) => {
    setActiveNoteID(e.target.id);
    if (e.target.id === "noteSelector") {
      setSelectorStatus("inactive");
    }
  };

  const handleSelectorStatus = () => {};
  return (
    <>
      <div className={styles.SelectorButton} onClick={handleSelectorStatus}>
        <FiMenu
          onClick={() =>
            setSelectorStatus(
              selectorStatus == "active" ? "inactive" : "active"
            )
          }
        />
      </div>
      <div
        id="noteSelector"
        className={`${styles.optionContainer} 
             ${selectorStatus == "inactive" && styles.inactiveNoteSelector}`}
      >
        <div className={styles.notesOptions}>
          <div className={styles.appTitle}>
            <p>Notes</p>
            <FiPlusSquare className={styles.PlusIcon} />
          </div>
          {notesLoading ? (
            <div className={styles.Message}>
              <Loading size={55} />
            </div>
          ) : notes?.length > 0 ? (
            <>
              <div className={styles.notesContainer}>
                {notes?.map((data) => (
                  <NoteCard
                    key={data._id}
                    noteData={data}
                    isActive={data._id === activeNoteID}
                  />
                ))}
              </div>
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
