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
    required: false,
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
