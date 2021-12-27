import React, { useContext, useEffect, useState } from "react";
import styles from "./noteCard.module.css";
import { HiXCircle, HiPencil } from "react-icons/hi";
import OptionsButton from "../OptionsButton/OptionsButton";
import UserContext from "../../context/User/UserContext";
import useFetch from "../../hooks/useFetch";
import Confirmation from "../Confirmation/Confirmation";
const NoteCard = ({ noteData, isActive, getNewNotes }) => {
  const user = useContext(UserContext);
  const [noteTitle, setNoteTitle] = useState(noteData?.title || "Note title");
  const editNote = useFetch(
    `https://notesbackendbyfacundolg.herokuapp.com/note`
  );
  const [confirmation, setConfirmation] = useState("inactive");
  const activeStatus = {
    background: "var(--primary-color)",
  };
  const editTitle = () => {
    document.getElementById(noteData._id + " Input").focus();
  };

  const handleUploadNewTitle = () => {
    editNote(
      { method: "PATCH" },
      { _id: noteData._id, data: { title: noteTitle } }
    );
  };

  const onConfirmationResponse = (wantToDelete) => {
    setConfirmation("inactive");
    if (wantToDelete) {
      editNote({ method: "DELETE" }, { _id: noteData._id }).then(console.log);
      user.setActiveUserNote(null);
      getNewNotes();
    }
  };
  useEffect(() => {
    if (isActive) {
      user.setActiveUserNote(noteData);
    }
  }, [isActive]);

  return (
    <div
      id={noteData._id}
      className={styles.noteCard}
      style={isActive ? activeStatus : {}}
    >
      {confirmation == "active" && (
        <Confirmation
          text={"Are you sure"}
          response={(wantToDelete) => onConfirmationResponse(wantToDelete)}
        />
      )}
      <input
        id={noteData?._id + " Input"}
        type="text"
        value={noteTitle}
        onChange={(e) => {
          setNoteTitle(e.target.value);
        }}
        onBlur={() => {
          handleUploadNewTitle();
        }}
      />
      <OptionsButton idReference={noteData?._id + "_Options"}>
        <ul>
          <li
            onClick={() => {
              setConfirmation("active");
            }}
          >
            <i>
              <HiXCircle />
            </i>
            Delete
          </li>

          <li onClick={editTitle}>
            <i>
              <HiPencil />
            </i>
            Edit
          </li>
        </ul>
      </OptionsButton>
    </div>
  );
};

export default NoteCard;
