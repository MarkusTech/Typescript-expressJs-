import app from "./app";
import colors from "colors";
import env from "./util/validateEnv";
import mongoose from "mongoose";

const port = env.PORT;
const db = env.MONGODB;

// Database
mongoose.connect(db!).then(() => {
  console.log("Database Connected".bgGreen);
});

app.listen(port, () => {
  colors;
  console.log(`Server is running on http://localhost:${port}`.bgCyan);
});
