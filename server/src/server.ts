import express from "express";
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Wenn Mark Recopelacion");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
