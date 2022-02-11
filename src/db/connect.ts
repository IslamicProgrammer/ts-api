import config from "config"
import mongoose from "mongoose"

import log from "../logger"

function connect() {
  const dbUri = config.get("dbUri") as string
  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log.info("Database connected!")
    })
    .catch(err => {
      log.error("DB error", err.message)
      process.exit(1)
    })
}

export default connect
