import User from "./model.js";
import mongoose from "mongoose";
import dbConection from "../../lib/dbConection";

dbConection();

export const addNewUser = (userData) => {
  return new Promise(async (resolve, reject) => {
    console.log(userData);
    const newUser = new User({
      username: userData.username,
      email: userData.email,
      password: userData.password,
      creationTime: new Date(),
      editionTime: new Date(),
    });
    await newUser.save((err) => {
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
        if (result) {
          resolve({ message: "User found", data: result });
        } else {
          reject({ message: "User not found", data: err });
        }
      })
      .catch((err) => {
        reject({ message: "User not found", data: err });
      });
  });
};

export const getUserByUsername = (username) => {
  return new Promise((resolve, reject) => {
    User.findOne({ username: username })
      .then((result) => {
        if (result) {
          resolve({ message: "User found", data: result });
        } else {
          reject({ message: "User not found", data: err });
        }
      })
      .catch((err) => {
        reject({ message: "User not found", data: err });
      });
  });
};
