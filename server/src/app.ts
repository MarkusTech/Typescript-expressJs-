import dotenv from "dotenv";
import express, { Request, Response } from "express";
import noteModel from "./models/note";
import { isHttpError } from "http-errors";

dotenv.config();

const app = express();
app.get("/", async (req, res) => {
  const notes = await noteModel.find().exec();
  res.status(200).json({
    status: true,
    message: "Notes Fetched!",
    notes,
  });
});

app.use((error: unknown, req: Request, res: Response) => {
  console.error(error);
  let errorMessage = "An unknown error occurred";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});

export default app;
