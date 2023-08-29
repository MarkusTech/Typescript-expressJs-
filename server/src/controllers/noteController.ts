import mongoose from "mongoose";
import noteModel from "../models/note";
import { RequestHandler } from "express";
import createHttpError from "http-errors";

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
  const { noteId } = req.params;
  try {
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid note id");
    }

    const note = await noteModel.findById(noteId).exec();

    if (!note) {
      throw createHttpError(404, "Note not found");
    }

    // if (!note.userId.equals(authenticatedUserId)) {
    //     throw createHttpError(401, "You cannot access this note");
    // }

    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

export { getNotes, getNote };
