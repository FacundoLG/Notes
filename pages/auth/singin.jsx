import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/auth.module.css";

const Singin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ username, password });
    const userData = { username, password };
    fetch("/api/singin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userData }),
    })
      .then((data) => data.json())
      .then(console.log);
    setUsername("");
    setPassword("");
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
              <Link href="/auth/singup">
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
