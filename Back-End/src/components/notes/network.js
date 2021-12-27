import express from "express";
import { success, error } from "../../utils/response";
import {
  createNewNote,
  getAllNotes,
  editOneNote,
  deleteNote,
} from "./controler";
const router = express.Router();

// router.get("/test", (req, res) => {
//   res.json(req.user);
// });

//Create new Note
router.post("/", (req, res) => {
  const user_id = req.user._id;
  createNewNote({ user_id, title: "New note" })
    .then((result) => {
      success(req, res, 200, result);
    })
    .catch((result) => {
      error(req, res, 400, result.message);
    });
});
//Get all the notes of a user
router.get("/", (req, res) => {
  getAllNotes(req.user._id)
    .then((result) => {
      success(req, res, 200, result);
    })
    .catch((result) => {
      error(req, res, 400, result.message);
    });
});
//Edit notes
router.patch("/", (req, res) => {
  editOneNote(req.body._id, req.body.data)
    .then((result) => {
      success(req, res, 200, result.message);
    })
    .catch((result) => {
      error(req, res, 500, result.message);
    });
});

router.delete("/", (req, res) => {
  deleteNote(req.body._id)
    .then((result) => {
      success(req, res, 200, result.message);
    })
    .catch((result) => {
      error(req, res, 500, result.message);
    });
});

export default router;
