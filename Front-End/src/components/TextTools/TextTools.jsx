import React, { useEffect } from "react";
import styles from "./textTools.module.css";

const TextTools = ({ currentTool, children }) => {
  useEffect(() => {
    const toolSelector = (e) => {
      if (e.target.id) {
        currentTool(e.target.id);
      }
    };
    document.querySelectorAll("button").forEach((element) => {
      element.addEventListener("click", (e) => {
        toolSelector(e);
      });
    });
    return () => {};
  }, []);

  return (
    <div className={styles.toolsContainer}>
      {children}
      <ul className={styles.toolsList}>
        <button id="T1">T1</button>
        <button id="T2">T2</button>
        <button id="T3">T3</button>
        <button id="P">P</button>
        <button id="B" style={{ fontWeight: "800" }}>
          B
        </button>
        <button id="U" style={{ textDecoration: "underline" }}>
          U
        </button>
        <button id="L" style={{ textDecoration: "line-through" }}>
          L
        </button>
        <button id="A" style={{ color: "var(--contrast-color)" }}>
          A
        </button>
      </ul>
      <div></div>
    </div>
  );
};

export default TextTools;
