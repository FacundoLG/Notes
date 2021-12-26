import { createNote, getNotes, editNote, findOneNotAndDelete } from "./store";
export const createNewNote = (noteData) => {
  return new Promise((resolve, reject) => {
    createNote(noteData).then(resolve).catch(reject);
  });
};
export const getAllNotes = (user_id) => {
  return new Promise((resolve, reject) => {
    getNotes(user_id).then(resolve).catch(reject);
  });
};

export const editOneNote = (_id, data) => {
  return new Promise((resolve, reject) => {
    editNote(_id, data).then(resolve).catch(reject);
  });
};

export const deleteNote = (noteID) => {
  return new Promise((resolve, reject) => {
    findOneNotAndDelete(noteID).then(resolve).then(reject);
  });
};
