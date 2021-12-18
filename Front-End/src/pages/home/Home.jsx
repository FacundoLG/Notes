import React, { useContext, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import NoteCard from "../../components/NoteCard/NoteCard";
import TextContainer from "../../components/TextContainer/TextContainer";
import UserContext from "../../context/User/UserContext";
import styles from "../../styles/Home.module.css";
const Home = () => {
  const user = useContext(UserContext);
  const notes = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const [activeId, setactiveId] = useState("");
  //NotesStates
  const [activeNote, setActiveNote] = useState(1);
  const [notesSelectorStatus, setNotesSelectorStatus] = useState("active");
  useEffect(() => {
    const getId = (target) => {
      console.log(target?.id);
      setactiveId(target?.id || "none");
    };
    document.addEventListener("click", ({ target }) => {
      getId(target);
    });
    return document.removeEventListener("click", ({ target }) => {
      getId(target);
    });
  }, []);

  return (
    <>
      <header className={styles.header}>
        <FiMenu
          className={styles.menuIcon}
          onClick={() => {
            if (notesSelectorStatus === "active") {
              setNotesSelectorStatus("inactive");
            } else {
              setNotesSelectorStatus("active");
            }
          }}
        />
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
          {notes.map((data, index) => (
            <NoteCard
              key={data.id + "_" + index}
              setActive={(id) => {
                setActiveNote(id);
              }}
              isActive={data.id === activeNote}
              noteData={data}
              index={index + 1}
              optionsControler={activeId}
            />
          ))}
        </div>
        <TextContainer />
      </main>
    </>
  );
};

export default Home;
