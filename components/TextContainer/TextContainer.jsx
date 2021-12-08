import React, { useEffect, useState } from "react";
import TextTools from "../textTools/TextTools";
import styles from "./textContainer.module.css";
const TextContainer = () => {
  const [tool, setTool] = useState({ name: "P", refresh: true });
  useEffect(() => {
    switch (tool.name) {
      case "B":
        document.execCommand("bold");
        break;
      case "L":
        document.execCommand("strikeThrough");
        break;
      case "U":
        document.execCommand("underline");
        break;
      case "L":
        document.execCommand("strikeThrough");
        break;
      default:
        document.execCommand("normal");
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
          setTool({ name: toolid, refresh: tool.refresh });
          document.querySelector("#editable").focus();
        }}
      />
    </div>
  );
};

export default TextContainer;
