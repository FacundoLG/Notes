import React, { useEffect, useState } from "react";
import TextTools from "../TextTools/TextTools";
import styles from "./textContainer.module.css";
const TextContainer = ({ initialData, textData }) => {
  const [tool, setTool] = useState({ name: "P", refresh: true });
  const [inStoreData, setInStoreData] = useState();
  const [currentTextContent, setCurrentTextContent] = useState(
    initialData?.content
  );
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
    document.getElementById("editable").innerHTML = initialData?.content;
    textData(initialData);
    setInStoreData(initialData);
  }, [initialData]);

  useEffect(() => {
    const editable = document.getElementById("editable");
    editable.addEventListener("keydown", (e) => {
      setCurrentTextContent(e.target.innerHTML);
    });
    return () => {
      editable.removeEventListener("keydown");
      textData({ ...initialData, content: editable.innerHTML });
    };
  }, []);

  useEffect(() => {
    console.log("interval");
    const isWriting = setInterval(() => {
      if (currentTextContent !== inStoreData?.content) {
        console.log("sending");
        console.log(currentTextContent, inStoreData);
        setInStoreData({ ...initialData, content: currentTextContent });
        textData({ ...initialData, content: currentTextContent });
      }
    }, 1000);
    return () => {
      clearInterval(isWriting);
    };
  }, [currentTextContent, inStoreData]);

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
