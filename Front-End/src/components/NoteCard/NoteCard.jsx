import React, { useEffect, useState } from "react";
import styles from "./noteCard.module.css";
import { HiXCircle, HiPencil } from "react-icons/hi";
import OptionsButton from "../OptionsButton/OptionsButton";
const NoteCard = ({ noteData, newTitle, isActive }) => {
  const [noteTitle, setNoteTitle] = useState(noteData?.title || "Note title");
  const [active, setActive] = useState(false);
  const activeStatus = {
    background: "var(--primary-color)",
  };
  const editTitle = () => {
    document.getElementById(noteData._id + " Input").focus();
  };
  useEffect(() => {
    console.log(isActive);
    setActive(isActive);
  }, [isActive]);

  return (
    <div
      id={noteData._id}
      className={styles.noteCard}
      style={active ? activeStatus : {}}
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
