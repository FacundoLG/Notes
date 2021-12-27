import { useEffect, useState } from "react";
import { FiMenu, FiPlusSquare } from "react-icons/fi";
import NoteCard from "../NoteCard/NoteCard";
import Loading from "../../assets/svgs/Loading/Loading.jsx";
import styles from "./notesSelector.module.css";
import useFetch from "../../hooks/useFetch";

const NotesSelector = ({
  userNotes,
  getNewNotes,
  selectorStatus,
  sendSelectorStatus,
}) => {
  const [notes, setNotes] = useState(null);
  const [notesLoading, setNotesLoading] = useState(true);
  const [activeNoteID, setActiveNoteID] = useState();
  const addNote = useFetch(
    "https://notesbackendbyfacundolg.herokuapp.com/note"
  );
  const GetID = (e) => {
    setActiveNoteID(e.target.id);
    if (e.target.id === "noteSelector") {
      sendSelectorStatus("inactive");
    }
  };

  const createNewNote = () => {
    addNote({ method: "POST" });
    getNewNotes();
  };

  useEffect(() => {
    if (!activeNoteID && notes) {
      setActiveNoteID(notes[0]?._id);
    }
  }, [notes, activeNoteID]);

  useEffect(() => {
    const selector = document.getElementById("noteSelector");
    selector.addEventListener("click", GetID);
    setNotes(userNotes);
    setNotesLoading(false);
    return () => {
      selector.removeEventListener("click", GetID);
    };
  }, [userNotes]);

  const handleSelectorStatus = () => {};
  return (
    <>
      <div className={styles.SelectorButton} onClick={handleSelectorStatus}>
        <FiMenu
          onClick={() =>
            sendSelectorStatus(
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
            <FiPlusSquare className={styles.PlusIcon} onClick={createNewNote} />
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
                    getNewNotes={() => getNewNotes()}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className={styles.Message}>
              <p>You don't have notes, create a new one</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NotesSelector;
