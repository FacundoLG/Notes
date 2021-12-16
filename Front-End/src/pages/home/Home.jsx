import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import NoteCard from "../../components/NoteCard/NoteCard";
import TextContainer from "../../components/TextContainer/TextContainer";
import styles from "../../styles/Home.module.css";
const Home = () => {
  const notes = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  //NotesStates
  const [activeNote, setActiveNote] = useState(1);

  const [activeOptions, setActiveOptions] = useState("");

  useEffect(() => {
    const getId = (target) => {
      console.log(target?.id);
      setActiveOptions(target?.id || "none");
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
        <FiMenu className={styles.menuIcon} />
        <p>
          Welcome <span>{"Username"}</span>{" "}
        </p>
      </header>
      <main className={styles.mainContainer}>
        <div className={styles.notesSelector}>
          {notes.map((data, index) => (
            <NoteCard
              key={data.id + "_" + index}
              setActive={(id) => {
                setActiveNote(id);
              }}
              isActive={data.id === activeNote}
              noteData={data}
              index={index + 1}
              optionsControler={activeOptions}
            />
          ))}
        </div>
        <div style={{ display: "flex", width: "70vw" }}>
          <TextContainer />
        </div>
      </main>
    </>
  );
};

export default Home;
