import response from "./response";

var jwt = require("jsonwebtoken");
const key = "SARAKATUNGA";

//Promise
export const generateToken = (data) => {
  return new Promise(async (resolve, reject) => {
    jwt.sign(data, key, { expiresIn: "1h" }, (err, tkn) => {
      console.log("[JWT Error] " + err);
      console.log(tkn);
      if (err) {
        reject({ message: "Internal Error", data: null });
      } else if (tkn) {
        resolve({ message: "", data: tkn });
      }
    });
  });
};

//middleware
export const verifyTolen = (req, res, next) => {
  jwt.verify(token, key, (err, data) => {
    if (err) {
      console.log("[JWT Error]" + err);
      response.error(req, res, 401, "Token expired or invalid");
    } else if (data) {
      req.user = data;
      next();
    }
  });
};
