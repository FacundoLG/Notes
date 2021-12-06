import React, { useEffect, useState } from "react";
import TextTools from "../textTools/TextTools";
import styles from "./textContainer.module.css";
const TextContainer = () => {
  const [tool, setTool] = useState("P");
  useEffect(() => {
    switch (tool) {
      case "B":
        document.execCommand("bold");
        break;
      case "L":
        document.execCommand("strikeThrough");
        break;
      case "U":
        document.execCommand("underline");
        break;
    }
  }, [tool]);

  return (
    <div className={styles.TextContainer}>
      <div
        id="editable"
        contentEditable="true"
        className={styles.EditableContent}
      ></div>
      <TextTools
        currentTool={(toolid) => {
          setTool(toolid);
          document.querySelector("#editable").focus();
        }}
      />
    </div>
  );
};

export default TextContainer;
