import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import createHttpError, { isHttpError } from "http-errors";
import morgan from "morgan";
import cors from "cors";
// import env from "./util/validateEnv";
// import session from "express-session";
// import MongoStore from "connect-mongo";

// API IMPORTS
import noteRoutes from "./routes/noteRoutes";

// dotenv config
dotenv.config();

// Rest Object
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// app.use(
//   session({
//     secret: env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 60 * 60 * 1000,
//     },
//     rolling: true,
//     store: MongoStore.create({
//       mongoUrl: env.MONGODB,
//     }),
//   })
// );

app.use("/api/notes", noteRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
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
