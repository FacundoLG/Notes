import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import styles from "../../styles/auth.module.css";
const Singup = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [canSend, setcanSend] = useState(false);

  useEffect(() => {
    if (username.length > 0) {
      if (username.length < 6) setUsernameError("Username is too short");
      else setUsernameError("");
    }
    if (email.length > 0) {
      if (
        email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        setEmailError("");
      } else {
        setEmailError("It's not an email");
      }
    }
    if (confirmationPassword.length > 0) {
      if (password !== confirmationPassword) {
        setPasswordError("Passwords doesn't match");
      } else {
        setPasswordError("");
      }
    }
    if (
      passwordError === "" &&
      emailError === "" &&
      usernameError === "" &&
      password === confirmationPassword
    ) {
      setcanSend(true);
      document.getElementById("submitButton").disabled = false;
    } else {
      setcanSend(false);
      document.getElementById("submitButton").disabled = true;
    }
  }, [
    username,
    email,
    password,
    confirmationPassword,
    canSend,
    passwordError,
    usernameError,
    emailError,
  ]);

  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const userData = { username, email, password };
    fetch("https://notesbackendbyfacundolg.herokuapp.com/user/singup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          console.log(res.error);
          if (res.error.username) {
            setUsername("");
            setUsernameError(res.error.username);
          }
          if (res.error.email) {
            setEmail("");
            setEmailError(res.error.email);
          }
        } else navigate("/singin");
      });
    setPassword("");
    setConfirmationPassword("");
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
            autoComplete="off"
          />
          <p className={styles.errorText}>{usernameError}</p>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoComplete="off"
          />
          <p className={styles.errorText}>{emailError}</p>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className={styles.errorText}>{passwordError}</p>
          <label htmlFor="cpassword">Confirmation Password</label>
          <input
            id="cpassword"
            type="password"
            value={confirmationPassword}
            onChange={(e) => {
              setConfirmationPassword(e.target.value);
            }}
          />
          <p className={styles.errorText}>{passwordError}</p>
        </div>
        <div className={styles.formOptions}>
          <div />
          <div>
            <p className={styles.formOptionsText}>
              Already have an acount?{" "}
              <Link to="/singin">
                <span className={styles.link}>Sing In</span>
              </Link>
            </p>
          </div>
        </div>
        <div>
          <button
            id="submitButton"
            type="submit"
            onClick={(e) => {
              handleRegister(e);
            }}
            className={styles.actionButton}
          >
            Sing Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Singup;
