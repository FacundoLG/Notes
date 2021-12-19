import { hashPassword, comparePassword } from "../../lib/bcrypt.js";
import { addNewUser, getUserByUsername, isUserAvailable } from "./store.js";
import { generateToken } from "../../lib/JWT.js";
export const SingUpUser = (userInformation) => {
  return new Promise((resolve, reject) => {
    //DB's funtion that verify if the email or username is used
    isUserAvailable(userInformation.username, userInformation.email)
      .then(() => {
        //bcrypt funtion that hash the password
        hashPassword(userInformation.password).then((result) => {
          const hashedPassword = result.data;
          console.log("hashed password");
          //DB's funtion that validate and create a new User
          addNewUser({ ...userInformation, password: hashedPassword })
            .then((result) => {
              resolve(result);
            })
            .catch((err) => {
              reject(err);
            });
        });
      })
      .catch((result) => {
        reject({ message: result.message });
      });
  });
};

export const SingInUser = (userInformation) => {
  return new Promise((resolve, reject) => {
    //DB's funtion that verify if the user exist and return the hashed password
    getUserByUsername(userInformation.username)
      .then((result) => {
        const User = result.data;
        const hashedPassword = User.password;
        //bcrypt funtion that validate password and autenticates the user
        comparePassword(userInformation.password, hashedPassword)
          .then((result) => {
            //JWT funtion that give a token for futures autorization
            console.log(result);
            generateToken({
              _id: User._id,
              username: User.username,
            })
              .then((result) => {
                resolve(result);
              })
              .catch((result) => {
                reject(result);
              });
          })
          .catch(() => {
            reject({ message: "User or Password does not match" });
          });
      })
      .catch(() => {
        reject({ message: "User or Password does not match" });
      });
  });
};
