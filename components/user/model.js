const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
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

module.exports = User;
