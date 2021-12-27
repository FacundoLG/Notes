import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/auth.module.css";
import UserContext from "../../context/User/UserContext";
const Singin = () => {
  let navigate = useNavigate();
  let user = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [generalError, setGeneralError] = useState("");

  useEffect(() => {
    if (username && password) {
      document.getElementById("singinButton").disabled = false;
    } else {
      document.getElementById("singinButton").disabled = true;
    }
  }, [username, password]);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ username, password });
    const userData = { username, password };
    fetch(`https://notesbackendbyfacundolg.herokuapp.com/user/singin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        else {
          user.setUserInfo(data.data);
          setUsername("");
          setPassword("");
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err.message);
        if (err?.message) setGeneralError(err.message);
      });
  };
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.inputsContainer}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <p className={styles.errorText}></p>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <p className={styles.errorText}>{generalError}</p>
        <div className={styles.formOptions}>
          <div>
            <input type="button" className={styles.checkButton} />
            <p className={styles.formOptionsText}>Remember me</p>
          </div>
          <div>
            <p className={styles.formOptionsText}>
              New here?{" "}
              <Link to="/singup">
                <span className={styles.link}>Sing Up</span>
              </Link>
            </p>
          </div>
        </div>
        <div>
          <button
            id="singinButton"
            type="submit"
            onClick={(e) => {
              handleLogin(e);
            }}
            className={styles.actionButton}
          >
            Sing In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Singin;
