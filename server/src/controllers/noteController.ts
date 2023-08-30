import noteModel from "../models/note";
import { RequestHandler } from "express";

const getNotes: RequestHandler = async (req, res, next) => {
  try {
    const notes = await noteModel.find().exec();
    res.status(200).json({
      status: true,
      message: "Notes Fetched!",
      notes,
    });
  } catch (error) {
    next(error);
  }
};

const getNote: RequestHandler = async (req, res, next) => {
  const noteId = req.params.noteId;
  try {
    const note = await noteModel.findById(noteId).exec();
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

const createNote: RequestHandler = async (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;
  try {
    const newNote = await noteModel.create({
      title: title,
      text: text,
    });
    res.status(200).json({
      status: true,
      message: "Note Added Successfully",
      newNote,
    });
  } catch (error) {
    next(error);
  }
};

export { getNotes, getNote, createNote };
