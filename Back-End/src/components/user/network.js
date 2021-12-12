import express from "express";
import { SingUpUser, SingInUser } from "./controler.js";
import { success, error } from "../../utils/response.js";
const router = express.Router();

router.post("/singup", (req, res) => {
  console.log(req.body);
  SingUpUser(req.body)
    .then((result) => {
      success(req, res, 200, result.message);
    })
    .catch((result) => {
      error(req, res, 400, result.message);
    });
});

router.post("/singin", (req, res) => {
  SingInUser(req.body)
    .then((result) => {
      success(req, res, 200, result.message, result.data);
    })
    .catch((result) => {
      error(req, res, 400, result.message);
    });
});

export default router;
