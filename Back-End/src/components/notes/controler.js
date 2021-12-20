import { createNote, getNotes, editNote } from "./store";
export const createNewNote = (noteData) => {
  return new Promise((resolve, reject) => {
    createNote(noteData)
      .then((result) => {
        resolve(result);
      })
      .catch((result) => {
        reject(result);
      });
  });
};
export const getAllNotes = (user_id) => {
  return new Promise((resolve, reject) => {
    getNotes(user_id)
      .then((result) => {
        resolve(result);
      })
      .catch((result) => {
        reject(result);
      });
  });
};

export const editOneNote = (_id, data) => {
  return new Promise((resolve, reject) => {
    editNote(_id, data).then(resolve).catch(reject);
  });
};
