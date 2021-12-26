import ReactDom from "react-dom";
import styles from "./confirmation.module.css";
import { GiConfirmed, GiCancel } from "react-icons/gi";
const Confirmation = ({ text, response }) => {
  return ReactDom.createPortal(
    <div className={styles.ConfirmationContainer}>
      <div className={styles.Confirmation}>
        <p>{text || "Are you sure"}</p>
        <div>
          <i>
            <GiConfirmed
              className={styles.confirm}
              onClick={() => {
                response(true);
              }}
            />
          </i>
          <i>
            <GiCancel
              className={styles.cancel}
              onClick={() => {
                response(false);
              }}
            />{" "}
          </i>
        </div>
      </div>
    </div>,
    document.getElementById("confirmationPortal")
  );
};

export default Confirmation;
