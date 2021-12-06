import React, { useEffect, useState } from "react";
import styles from "./noteCard.module.css";
import { HiDotsVertical, HiXCircle } from "react-icons/hi";
const NoteCard = ({ noteData, setActive, isActive }) => {
  const [noteTitle, setNoteTitle] = useState(noteData?.title || "Note title");
  const [toolTip, setToolTip] = useState(false);

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

      <div style={{ display: "flex", alignItems: "center" }}>
        <HiDotsVertical
          id="toolTipButton"
          className={styles.dotsIcon}
          onClick={(e) => {
            setToolTip(!toolTip);
          }}
        />
        {toolTip && (
          <div id="tooltip" className={styles.cardToolTip}>
            <div className={styles.toolTip}>
              <ul>
                <li>
                  <p>Delete</p>
                  <HiXCircle className={styles.toolTipIcon} />
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteCard;
