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

  const editNote = (data) => {
    fetch("http://localhost:3010/note", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${user.state.token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getNotes();
      });
  };

  useEffect(() => {
    getNotes();
    const getId = (target) => {
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
            ) : notes.length > 0 ? (
              notes.map((data) => (
                <NoteCard
                  key={data._id + "_Note"}
                  setActive={(data) => {
                    setActiveNote(data);
                  }}
                  isActive={data._id === activeNote._id}
                  noteData={data}
                  optionsControler={activeId}
                  newTitle={(title) => {
                    editNote({ _id: data._id, data: { title } });
                  }}
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
        <TextContainer
          content={activeNote?.content}
          editContent={(content) => {
            editNote({ _id: activeNote._id, data: { content } });
          }}
        />
      </main>
    </>
  );
};

export default Home;
