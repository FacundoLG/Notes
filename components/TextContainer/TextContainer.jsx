import React, { useEffect, useState } from "react";
import TextTools from "../TextTools/TextTools";
import styles from "./textContainer.module.css";
const TextContainer = () => {
  const [tool, setTool] = useState({ name: "P", refresh: true });
  useEffect(() => {
    console.log(document.getElementById("editable").innerHTML);
    console.log(tool);
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
      case "T1":
        document.execCommand("fontSize", false, "6");
        break;
      case "T2":
        document.execCommand("fontSize", false, "5");
        break;
      case "T3":
        document.execCommand("fontSize", false, "4");
        break;
      case "P":
        document.execCommand("fontSize", false, "3");
        document.execCommand("styleWithCSS", false, true);

        document.execCommand("foreColor", false, "var(--font-color)");
        break;
      case "A":
        document.execCommand("styleWithCSS", false, true);
        document.execCommand("foreColor", false, "var(--contrast-color)");
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
          document.querySelector("#editable").focus();

          setTool({ name: toolid, refresh: tool.refresh });
          document.querySelector("#editable").focus();
        }}
      />
    </div>
  );
};

export default TextContainer;
