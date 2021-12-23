import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import styles from "./optionsButton.module.css";
const OptionsButton = ({ idReference, optionsId, children }) => {
  const [isActive, setIsActive] = useState(false);

  const id = idReference || 1;

  useEffect(() => {
    if (optionsId === id) {
      setIsActive(!isActive);
    } else {
      setIsActive(false);
    }
  }, [optionsId]);

  return (
    <div id={id} className={styles.Container}>
      <button style={{ pointerEvents: "none" }} className={styles.svgButton}>
        <BsThreeDotsVertical
          name="Patatudo"
          style={{ pointerEvents: "none" }}
        />
      </button>
      <div
        className={styles.Options}
        style={
          isActive
            ? {}
            : {
                display: "none",
              }
        }
      >
        {children}
      </div>
    </div>
  );
};

export default OptionsButton;
