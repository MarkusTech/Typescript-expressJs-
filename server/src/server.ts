import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Dotenv Config
dotenv.config();
const port = process.env.PORT;
const db = process.env.MONGODB;

// Rest Object
const app = express();

// Middlewares

// Rest API
app.get("/", (req, res) => {
  res.send("Wenn Mark Recopelacion");
});

// Database
mongoose.connect(db!).then(() => {
  console.log("Database Connected".bgGreen);
});

app.listen(port, () => {
  colors;
  console.log(`Server is running on http://localhost:${port}`.bgCyan);
});
