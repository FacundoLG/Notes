import User from "./model.js";
import mongoose from "mongoose";
import dbConection from "../../lib/dbConection";

dbConection();

export const addNewUser = (userData) => {
  return new Promise((resolve, reject) => {
    console.log(userData);
    const newUser = new User({
      username: userData.username,
      email: userData.email,
      password: userData.password,
      creationTime: new Date(),
      editionTime: new Date(),
    });
    newUser.save((err) => {
      if (err)
        reject({ message: err.message || " Unexpected error ", data: err });
      else resolve({ message: "User created", data: null });
    });
  });
};

export const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    User.findOne({ email: email })
      .then((result) => {
        if (!result) reject({ message: "User not found" });
        else resolve({ message: "User found", data: result });
      })
      .catch((err) => {
        reject({ message: "User not found" });
      });
  });
};

export const getUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    User.findOne({ username: username })
      .then((result) => {
        if (!result) reject({ message: "User not found" });
        else resolve({ message: "User found", data: result });
      })
      .catch((err) => {
        reject({ message: "User not found" });
      });
  });
};

export const isUserAvailable = (username, email) => {
  return new Promise((resolve, reject) => {
    getUserByUsername(username)
      .then((result) => {
        if (result) reject({ message: "Username already in use" });
        else resolve({ message: "User is free" });
      })
      .catch(() => {
        getUserByEmail(email)
          .then((result) => {
            if (result) reject({ message: "Email Already in use" });
            else resolve({ message: "User is free" });
          })
          .catch(() => {
            resolve({ message: "User is free" });
          });
      });
  });
};
