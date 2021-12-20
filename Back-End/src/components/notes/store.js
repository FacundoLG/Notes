import Note from "./model";

export const getNotes = (user_id) => {
  return new Promise((resolve, reject) => {
    Note.find({ user_id })
      .then((results) => {
        if (results) resolve({ message: "Notes found", data: results });
        else reject({ message: "You dont have notes, crete a new one" });
      })
      .catch((results) => {
        console.log(results);
        reject({ message: "You dont have notes, crete a new one" });
      });
  });
};
export const createNote = (noteData) => {
  return new Promise((resolve, reject) => {
    const newNote = new Note({
      user_id: noteData.user_id,
      title: noteData.title,
      content: noteData.content,
      creationTime: new Date(),
      editionTime: new Date(),
    });

    newNote.save((err) => {
      if (err) reject({ message: err.message });
      else resolve({ message: "Note created successfully" });
    });
  });
};
export const editNote = (_id, data) => {
  return new Promise((resolve, reject) => {
    Note.findOneAndUpdate({ _id }, data)
      .then(() => {
        resolve({ message: "Edited" });
      })
      .catch((err) => {
        console.log("[NOTE EDIT]" + err);
        reject({ message: "Error" });
      });
  });
};
