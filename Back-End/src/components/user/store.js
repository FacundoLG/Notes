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
export const getOneUser = (userParam) => {
  return new Promise((resolve, reject) => {
    UserModel.findOne(userParam)
      .then((result) => {
        resolve({ message: "User finded", data: result });
      })
      .catch((err) => {
        reject({ message: "User not found", data: err });
      });
  });
};
