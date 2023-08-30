import express from "express";
import * as notesController from "../controllers/noteController";

const router = express.Router();

router.get("/", notesController.getNotes);
router.get("/:noteId", notesController.getNote);
router.post("/create", notesController.createNote);

export default router;
