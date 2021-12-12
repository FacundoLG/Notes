import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
    minlength: 6,
    maxlength: 40,
  },
  password: {
    required: true,
    type: String,
    minlength: 10,
  },
  email: {
    required: true,
    type: String,
    minlength: 6,
  },
  creationTime: {
    required: true,
    type: Date,
  },
  editionTime: {
    required: true,
    type: Date,
  },
  fullName: {
    required: false,
    type: String,
  },
  theme: {
    type: String,
    default: "DarkOrange",
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
