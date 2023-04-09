import express, { response } from "express";
import config from "config";
import log from "./utils/logger";
import connect from "./utils/connect";
import routes from "./routes";

const port = config.get<number>("port");
const host = config.get<string>("host");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use()

app.listen(port, host, async () => {
  log.info(`Server listening at http://${host}:${port}`);

  await connect();

  routes(app);
});
