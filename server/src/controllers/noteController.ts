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

export { getNotes };
