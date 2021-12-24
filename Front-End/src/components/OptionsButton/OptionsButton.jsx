import { useContext, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import OptionsContext from "../../context/Options/OptionsContext";
import styles from "./optionsButton.module.css";
const OptionsButton = ({ idReference, children }) => {
  const [isActive, setIsActive] = useState(false);
  const option = useContext(OptionsContext);
  const id = idReference || 1;

  useEffect(() => {
    if (option.state.current_id === id) {
      setIsActive(!isActive);
    } else {
      setIsActive(false);
    }
  }, [option]);

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
