import React, { useEffect, useState } from "react";
import styles from "./noteCard.module.css";
import { HiXCircle, HiPencil } from "react-icons/hi";
import OptionsButton from "../OptionsButton/OptionsButton";
const NoteCard = ({
  noteData,
  setActive,
  isActive,

  optionsControler,
}) => {
  const [noteTitle, setNoteTitle] = useState(noteData?.title || "Note title");

  const activeStatus = {
    background: "var(--primary-color)",
  };

  const editTitle = () => {
    document.getElementById(noteData._id + " Input").focus();
  };

  return (
    <div
      className={styles.noteCard}
      style={isActive ? activeStatus : {}}
      onClick={() => {
        setActive(noteData);
      }}
    >
      <input
        id={noteData._id + " Input"}
        type="text"
        value={noteTitle}
        onChange={(e) => {
          setNoteTitle(e.target.value);
        }}
      />
      <OptionsButton
        idReference={noteData._id + "_Options"}
        optionsId={optionsControler}
      >
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
