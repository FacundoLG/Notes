import express from "express";
import { success, error } from "../../utils/response";
import { createNewNote, getAllNotes } from "./controler";
const router = express.Router();

router.get("/test", (req, res) => {
  res.json(req.user);
});

//Create new Note
router.post("/", (req, res) => {
  const { noteData } = req.body;
  console.log(noteData);
  createNewNote(noteData)
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

router.patch("/", (req, res) => {});

export default router;
