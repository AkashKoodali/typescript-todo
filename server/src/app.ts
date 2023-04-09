import dotenv from "dotenv";
dotenv.config();
import express from "express";
import config from "config";
import cors from "cors";
import morgan from "morgan";
// 
import log from "./utils/logger";
import connect from "./utils/connect";
import routes from "./routes";

const port = config.get<number>("port");
const host = config.get<string>("host");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

app.listen(port, host, async () => {
  log.info(`Server listening at http://${host}:${port}`);

  await connect();

  routes(app);
});
