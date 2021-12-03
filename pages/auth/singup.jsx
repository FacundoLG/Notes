import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/auth.module.css";
const Singup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    console.log({ username, email, password, confirmationPassword });
    setUsername("");
    setEmail("");
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
          />
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
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
          <label htmlFor="cpassword">Confirmation Password</label>
          <input
            id="cpassword"
            type="password"
            value={confirmationPassword}
            onChange={(e) => {
              setConfirmationPassword(e.target.value);
            }}
          />
        </div>
        <div className={styles.formOptions}>
          <div />
          <div>
            <p className={styles.formOptionsText}>
              Already have an acount?{" "}
              <Link href="/auth/singin">
                <span className={styles.link}>Sing In</span>
              </Link>
            </p>
          </div>
        </div>
        <div>
          <button
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
