import React, { useEffect, useState } from "react";
import TextTools from "../TextTools/TextTools";
import styles from "./textContainer.module.css";
const TextContainer = ({ editContent, content }) => {
  const [tool, setTool] = useState({ name: "P", refresh: true });
  const [HTMLContent, setHTMLContent] = useState("");
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

  useEffect(() => {
    document.getElementById("editable").innerHTML = content;
  }, [content]);

  useEffect(() => {
    setInterval(() => {
      const editableHTML = document.getElementById("editable").innerHTML;
      setHTMLContent(editableHTML);
    }, 3000);
  }, []);
  useEffect(() => {
    if (HTMLContent !== content) {
      editContent(HTMLContent);
    }
  }, [HTMLContent]);

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
