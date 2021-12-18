import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/auth.module.css";
import UserContext from "../../context/User/UserContext";
const Singin = () => {
  let navigate = useNavigate();
  let user = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ username, password });
    const userData = { username, password };
    fetch("http://localhost:3010/user/singin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((data) => data.json())
      .then((data) => {
        user.setUserInfo(data.data);
        console.log(data.data);
        setUsername("");
        setPassword("");
      })
      .then(() => {
        console.log(user.token);
        navigate("/home");
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
