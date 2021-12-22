import React, { useContext, useEffect, useState } from "react";
import { FiMenu, FiPlusSquare } from "react-icons/fi";
import NoteCard from "../NoteCard/NoteCard";
import TextContainer from "../TextContainer/TextContainer";
import UserContext from "../../context/User/UserContext";
import styles from "../../styles/Home.module.css";
import Loading from "../../assets/svgs/Loading/Loading.jsx";
import useFetch from "../../hooks/useFetch";
const Notes = () => {
  //API
  const { editNoteRes, editNote } = useFetch("http://localhost:3010/note", {
    method: "PATCH",
  });
  const { fetchedNotes, getNotes } = useFetch("http://localhost:3010/note", {
    method: "GET",
  });
  const { createNoteRes, createNote } = useFetch("http://localhost:3010/note", {
    method: "POST",
  });

  return (
    <>
      <header className={styles.header}>
        <FiMenu className={styles.menuIcon} />
        <p>
          Welcome <span>{user.state.username || "Username"}</span>{" "}
        </p>
      </header>
      <main className={styles.mainContainer}>
        <div
          className={`${styles.notesSelector} ${
            notesSelectorStatus == "inactive" && styles.inactiveNoteSelector
          } `}
        >
          <div className={styles.notesContainer}>
            {isNotesLoading ? (
              <div className={styles.Message}>
                <Loading />
              </div>
            ) : notes.length > 0 ? (
              <>
                {notes.map((data) => (
                  <NoteCard />
                ))}
                <FiPlusSquare />
              </>
            ) : (
              <div className={styles.Message}>
                <p>You don't have notes, create a new one</p>
                <FiPlusSquare />
              </div>
            )}
          </div>
        </div>
        <TextContainer />
      </main>
    </>
  );
};

export default Notes;
