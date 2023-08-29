import dotenv from "dotenv";
import express, { Request, Response } from "express";
import noteModel from "./models/note";
import { isHttpError } from "http-errors";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

// dotenv config
dotenv.config();

// Rest Object
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded());

app.get("/", async (req, res) => {
  const notes = await noteModel.find().exec();
  res.status(200).json({
    status: true,
    message: "Notes Fetched!",
    notes,
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
