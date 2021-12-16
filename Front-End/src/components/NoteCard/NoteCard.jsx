import React, { useEffect, useState } from "react";
import styles from "./noteCard.module.css";
import { HiXCircle, HiPencil } from "react-icons/hi";
import OptionsButton from "../OptionsButton/OptionsButton";
const NoteCard = ({
  noteData,
  setActive,
  isActive,
  index,
  optionsControler,
}) => {
  const [noteTitle, setNoteTitle] = useState(noteData?.title || "Note title");

  const activeStatus = {
    background: "var(--primary-color)",
  };

  return (
    <div
      className={styles.noteCard}
      style={isActive ? activeStatus : {}}
      onClick={() => {
        setActive(noteData?.id);
      }}
    >
      <input
        type="text"
        value={noteTitle}
        onChange={(e) => {
          setNoteTitle(e.target.value);
        }}
      />
      <OptionsButton idReference={index} optionsId={optionsControler}>
        <ul>
          <li>
            <i>
              <HiXCircle />
            </i>
            Delete
          </li>

          <li>
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
