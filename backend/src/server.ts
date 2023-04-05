import express from "express";
import "./bootstrap";
import logger from "./shared/log/logger";
import { VerifyIsOnlineWithAxios } from "./modules/monitors/services/implementations/VerifyIsOnlineWithAxios";
const app = express();

app.listen(process.env.PORT, () => {
  logger.info(`Server started on port: ${process.env.PORT}`);
});

const verifyIsOnline = new VerifyIsOnlineWithAxios();

const site = process.env.URL_TO_MONITOR || "https://google.com.br";

verifyIsOnline.onlineStatusCheckInterval(site);


verifyIsOnline.onlineStatusCheckInterval("https://api.app.oibot.com.br/");