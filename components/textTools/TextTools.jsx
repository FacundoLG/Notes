import React, { useEffect } from "react";
import styles from "./textTools.module.css";
const TextTools = ({ currentTool }) => {
  useEffect(() => {
    const toolSelector = (e) => {
      if (e.target.id) {
        currentTool(e.target.id);
      }
    };
    console.log(document.querySelector("li"));
    document.querySelectorAll("li").forEach((element) => {
      element.addEventListener("click", (e) => {
        toolSelector(e);
      });
    });
    return () => {};
  }, []);

  return (
    <div className={styles.toolsContainer}>
      <ul className={styles.toolsList}>
        <li id="T1">
          T<span>1</span>
        </li>
        <li id="T2">
          T<span>2</span>
        </li>
        <li id="T3">
          T<span>3</span>
        </li>
        <li id="P">P</li>
        <li id="B" style={{ fontWeight: "800" }}>
          B
        </li>
        <li id="U" style={{ textDecoration: "underline" }}>
          U
        </li>
        <li id="T" style={{ textDecoration: "line-through" }}>
          T
        </li>
        <li id="A" style={{ color: "var(--contrast-color)" }}>
          A
        </li>
      </ul>
    </div>
  );
};

export default TextTools;
