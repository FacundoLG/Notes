import React, { useContext, useEffect, useState } from "react";
import { FiMenu, FiPlusSquare } from "react-icons/fi";
import NoteCard from "../../components/NoteCard/NoteCard";
import TextContainer from "../../components/TextContainer/TextContainer";
import UserContext from "../../context/User/UserContext";
import styles from "../../styles/Home.module.css";
import Loading from "../../assets/svgs/Loading/Loading.jsx";
const Home = () => {
  const user = useContext(UserContext);
  const [notes, setNotes] = useState(null);
  const [isNotesLoading, setIsNotesLoading] = useState(true);
  const [activeId, setactiveId] = useState("");
  //NotesStates
  const [activeNote, setActiveNote] = useState({});
  const [notesSelectorStatus, setNotesSelectorStatus] = useState("active");
  const getNotes = () => {
    setIsNotesLoading(true);
    fetch("http://localhost:3010/note", {
      headers: {
        Authorization: `bearer ${user.state.token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        setNotes(res.message.data);
        setIsNotesLoading(false);
      });
  };
  const createNote = () => {
    fetch("http://localhost:3010/note", {
      method: "POST",
      headers: { Authorization: `bearer ${user.state.token}` },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getNotes();
      });
  };

  const editNote = (changeObject) => {
    fetch("http:/localhost:3010/note", {
      method: "PUT",
      headers: {
        "Content-Type": "apllication/json",
        Authorization: `bearer ${user.state.token}`,
      },
      body: JSON.stringify(changeObject),
    });
  };

  useEffect(() => {
    getNotes();
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
          <div className={styles.notesContainer}>
            {isNotesLoading ? (
              <div className={styles.Message}>
                <Loading />
              </div>
            ) : notes ? (
              notes.map((data) => (
                <NoteCard
                  key={data._id + "_Note"}
                  setActive={(data) => {
                    console.log(data);
                    setActiveNote(data);
                  }}
                  isActive={data._id === activeNote._id}
                  noteData={data}
                  optionsControler={activeId}
                />
              ))
            ) : (
              <div className={styles.Message}>
                <p>You don't have notes, create a new one</p>
                <FiPlusSquare
                  className={styles.PlusIcon}
                  onClick={createNote}
                />
              </div>
            )}
          </div>
        </div>
        <TextContainer />
      </main>
    </>
  );
};

export default Home;
