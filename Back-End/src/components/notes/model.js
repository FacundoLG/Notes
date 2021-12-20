import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
    default: "<h1>Write Something</h1>",
  },
  creationTime: {
    required: true,
    type: Date,
  },
  editionTime: {
    required: true,
    type: Date,
  },
});

const Note = mongoose.model("Note", NotesSchema);

export default Note;
