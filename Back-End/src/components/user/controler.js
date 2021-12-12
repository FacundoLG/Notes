import { hashPasword, comparePassword } from "../../lib/bcrypt.js";
import { addNewUser, getOneUser } from "./store.js";

export const SingUpUser = (userInformation) => {
  return new Promise((resolve, reject) => {
    //DB's funtion that verify if the email or username is used
    //bcrypt funtion that hash the password
    hashPasword(userInformation.password).then((result) => {
      const hashedPassword = result.data;
      //DB's funtion that validate and create a new User

      addNewUser({ ...userInformation, password: hashedPassword })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

export const SingInUser = (userInformation) => {
  return new Promise((resolve, reject) => {
    //DB's funtion that verify if the user exist
    //bcrypt funtion that validate password and autenticates the user
    comparePassword(userInformation.password, hashedPassord);
    //JWT funtion that give a token for futures autorization
    resolve({ message: "Token validated", data: "Token" });
    reject({ message: "Token invalid or expired", data: null });
  });
};
