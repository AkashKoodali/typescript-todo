import mongoose from "mongoose";
import log from "./logger";

async function connect() {
  const URI = process.env.MONGO_URL;

  try {
    await mongoose.connect(`${URI}`);
    log.info("DB Connected..!");
  } catch (error) {
    log.info("Could not connect to db");
    process.exit(1);
  }
}

export default connect;
