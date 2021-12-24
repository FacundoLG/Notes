import React, { useContext, useEffect, useRef, useState } from "react";
import UserContext from "../../context/User/UserContext";
import TextTools from "../TextTools/TextTools";
import styles from "./textContainer.module.css";
import Loading from "../../assets/svgs/Loading/Loading";
import { BsFillCloudCheckFill } from "react-icons/bs";
import useFetch from "../../hooks/useFetch";
const TextContainer = () => {
  const user = useContext(UserContext);
  const [tool, setTool] = useState({ name: "P", refresh: true });
  const [isUpdating, setIsUpdating] = useState(true);
  const [baseContent, setBaseContent] = useState(null);
  const [textContent, setTextContent] = useState(null);

  const editNote = useFetch("http://localhost:3010/note");

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
    const editable = document.getElementById("editable");
    editable.addEventListener("keyup", handleTextContentUpload);
    editable.innerHTML = user.state.activeNote?.content;
    setTextContent(user.state.activeNote?.content);
    setBaseContent(user.state.activeNote?.content);
    return () => {
      editable.removeEventListener("keyup", handleTextContentUpload);
      if (
        user.state.activeNote &&
        user.state.activeNote.content != editable?.innerHTML
      ) {
        handleEditNoteContent();
      }
    };
  }, [user.state.activeNote?.content]);

  useEffect(() => {
    if (textContent !== baseContent) {
      setIsUpdating(true);
      var pushTimeOut = setTimeout(() => {
        handleEditNoteContent();
        setBaseContent(textContent);
      }, 2000);
    } else {
      setIsUpdating(false);
    }
    return () => {
      clearTimeout(pushTimeOut);
    };
  }, [textContent, baseContent]);

  const handleTextContentUpload = (e) => {
    setTextContent(e.target.innerHTML);
  };

  const handleEditNoteContent = () => {
    console.log("Pushing edit");
    editNote(
      { method: "PATCH" },
      {
        _id: user.state.activeNote._id,
        data: { content: document.getElementById("editable")?.innerHTML },
      }
    ).then(console.log);
  };

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
      >
        <div className={styles.textStatus}>
          {isUpdating ? (
            <i>
              <Loading size={20} />
            </i>
          ) : (
            <i>
              <BsFillCloudCheckFill />
            </i>
          )}
        </div>
      </TextTools>
    </div>
  );
};

export default TextContainer;
