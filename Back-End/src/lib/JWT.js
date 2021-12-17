import { error } from "../utils/response.js";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
const key = process.env.JWTKEY;

//Promise
export const generateToken = (data) => {
  return new Promise(async (resolve, reject) => {
    jwt.sign(data, key, { expiresIn: "1h" }, (err, tkn) => {
      if (err) {
        console.log("[JWT Error]" + err);
        reject({ message: "Internal Error", data: null });
      } else if (tkn) {
        resolve({ message: "", data: { tkn, username: data.username } });
      }
    });
  });
};

//middleware
export const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    error(req, res, 401, { message: "Token is required" });
  }
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, key, (err, data) => {
    if (err) {
      console.log("[JWT Error]" + err);
      error(req, res, 401, "Token expired or invalid");
    } else if (data) {
      req.user = data;
      next();
    }
  });
};
