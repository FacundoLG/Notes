import bcrypt from "bcryptjs";
const saltRounds = bcrypt.genSaltSync(10);

export const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt
      .hash(password, saltRounds)
      .then((hash) => {
        resolve({ message: "Password successfully hashed", data: hash });
      })
      .catch((err) => reject({ message: "Sing up error" }));
  });
};

export const comparePassword = (password, hashedPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword).then((result) => {
      if (result) {
        resolve({ message: "Password validated" });
      } else {
        reject({ message: "Icorrect password or username :(" });
      }
    });
  });
};
