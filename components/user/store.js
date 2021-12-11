const User = require("./model");
const mongoose = require("mongoose");
const dbConection = require("../../lib/dbConection");

dbConection();

module.exports = {
  addNewUser: (userData) => {
    return new Promise(async (resolve, reject) => {
      const newUser = new User({
        username: userData.username,
        email: userData.email,
        password: userData.password,
        creationTime: new Date(),
        editionTime: new Date(),
      });
      await newUser.save((err) => {
        reject({ message: "error", data: err });
      });
      resolve({ message: "User created", data: null });
    });
  },
  getOneUser: (userParam) => {
    return new Promise((resolve, reject) => {
      UserModel.findOne(userParam)
        .then((result) => {
          resolve({ message: "User finded", data: result });
        })
        .catch((err) => {
          reject({ message: "User not found", data: err });
        });
    });
  },
};
