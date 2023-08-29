import dotenv from "dotenv";
import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";

dotenv.config();
export default cleanEnv(process.env, {
  MONGODB: str(),
  PORT: port(),
});
