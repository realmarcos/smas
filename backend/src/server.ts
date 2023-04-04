import express from "express";
import "./bootstrap";
import logger from "./shared/log/logger";
const app = express();

app.listen(process.env.PORT, () => {
  logger.info(`Server started on port: ${process.env.PORT}`);
});
