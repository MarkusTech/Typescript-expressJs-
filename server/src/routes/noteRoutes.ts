import express from "express";
import * as notesController from "../controllers/noteController";

const router = express.Router();

router.get("/", notesController.getNotes);

export default router;
