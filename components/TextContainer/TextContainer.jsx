import React from "react";
import styles from "./textContainer.module.css";
const TextContainer = ({ activeTool }) => {
  return (
    <div className={styles.TextContainer}>
      <div contentEditable="true" className={styles.EditableContent}></div>
    </div>
  );
};

export default TextContainer;
