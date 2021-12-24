import React, { useContext, useEffect, useState } from "react";
import styles from "./noteCard.module.css";
import { HiXCircle, HiPencil } from "react-icons/hi";
import OptionsButton from "../OptionsButton/OptionsButton";
import UserContext from "../../context/User/UserContext";
const NoteCard = ({ noteData, newTitle, isActive }) => {
  const user = useContext(UserContext);
  const [noteTitle, setNoteTitle] = useState(noteData?.title || "Note title");
  const activeStatus = {
    background: "var(--primary-color)",
  };
  const editTitle = () => {
    document.getElementById(noteData._id + " Input").focus();
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
      <input
        id={noteData?._id + " Input"}
        type="text"
        value={noteTitle}
        onChange={(e) => {
          setNoteTitle(e.target.value);
        }}
        onBlur={() => {
          newTitle(noteTitle);
        }}
      />
      <OptionsButton idReference={noteData?._id + "_Options"}>
        <ul>
          <li>
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
