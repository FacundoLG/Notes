import bcrypt from "bcryptjs";
const saltRounds = 10;

export const hashPasword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt
      .hash(password, saltRounds)
      .then((hash) => {
        resolve({ message: "Password successfully hashed", data: hash });
      })
      .catch((err) => reject({ message: err }));
  });
};

export const comparePassword = (password, hashedPassword) => {
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
