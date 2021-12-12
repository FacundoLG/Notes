import bcryptLib from "../../lib/bcrypt"
import userStore from "./store"

export const SingUpUser = (userInformation) => {
    return new Promise((resolve, reject) => {
      //DB's funtion that verify if the email or username is used
      //bcrypt funtion that hash the password
      bcryptLib.hashPasword(password).then((result) => {
        const hashedPassword = result.data;
        //DB's funtion that validate and create a new User
        userStore
          .addNewUser({ password: hashedPassword, ...userInformation })
          .then((result) => {
            resolve(result);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  }

export const SingInUser= (userInformation) => {
    return new Promise((resolve, reject) => {
      //DB's funtion that verify if the user exist
      //bcrypt funtion that validate password and autenticates the user
      bcryptLib.comparePassword(userInformation.password, hashedPassord);
      //JWT funtion that give a token for futures autorization
      resolve({ message: "Token validated", data: "Token" });
      reject({ message: "Token invalid or expired", data: null });
    });
  },
