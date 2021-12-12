const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPasword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt
      .hash(password, saltRounds)
      .then((hash) => {
        resolve({ message: "Password successfully hashed", data: hash });
      })
      .catch((err) => reject({ message: err }));
  });
};

const comparePassword = (password, hashedPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword).then((result) => {
      if (result) {
        resolve({ message: "Password validated" });
      } else {
        resolve({ message: err });
      }
    });
  });
};

module.exports = { hashPasword, comparePassword };
