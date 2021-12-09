module.exports = {
  SingUpUser: (userInformation) => {
    return new Promise((resolve, reject) => {
      //DB's funtion that verify if the email or username is used
      //ByCrypt funtion that hash the password
      //DB's funtion that validate and create a new User
      resolve({ message: "User created", data: null });
      reject({ message: "Error", data: null });
    });
  },
  SingInUser: (userInformation) => {
    return new Promise((resolve, reject) => {
      //DB's funtion that verify if the user exist
      //ByCrypt funtion that validate password and autenticates the user
      //JWT funtion that give a token for futures autorization
      resolve({ message: "Token validated", data: "Token" });
      reject({ message: "Token invalid or expired", data: null });
    });
  },
  editUserInformation: (newInformation) => {
    return new Promise((resolve, reject) => {});
  },
};
