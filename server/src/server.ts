import express from "express";
import colors from "colors";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Wenn Mark Recopelacion");
});

app.listen(port, () => {
  colors;
  console.log(`Server is running on http://localhost:${port}`.bgCyan);
});
