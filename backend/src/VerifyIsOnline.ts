/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "./axios";
import logger from "./shared/log/logger";

const webSite = process.env.URL_TO_MONITOR;

const VerifyIsOnline = async () => { 
  try {
    const response = await axios.get("/");
    logger.info(`Website ${webSite} is online! status: ${response.status}`);
  } catch (error: any) {
    logger.error(`Website ${webSite} is offline! Erro: ${error.message}, Status: ${error.status}`);
  }
};

export default VerifyIsOnline;