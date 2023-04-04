/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from "axios";
import logger from "../../../../shared/log/logger";
import { IMonitorsRepository } from "../../repositories/IMonitorsRepository";
import { AppError } from "../../../../shared/errors/AppError";

class VerifyIsOnlineWithAxios implements IMonitorsRepository {
  private instance: AxiosInstance;
  // private baseURL = process.env.URL_TO_MONITOR;
  private timeoutMillisecondsToSeconds = 4 * 1000;
  private checkIntervalInSeconds = process.env.CHECK_INTERVAL_IN_SECONDS || 60;
  

  constructor() {
    this.instance = axios.create({
      withCredentials: false,
      timeout: this.timeoutMillisecondsToSeconds,
      headers: {
        "X-Custom-Header": "foobar",
      }
    });
  }

  async verifyIsOnline(site: string): Promise<void> {
    try {
      const response = await this.instance.get(site);
      logger.info(`Website ${site} is online! status: ${response.status}`);
    } catch (error: any) {
      logger.error(`Website ${site} is offline! Erro: ${error.message}`);
      throw new AppError("Website is offline!");
    }
  }

  async onlineStatusCheckInterval(site: string): Promise<void> {
    const checkIntervalMs = +this.checkIntervalInSeconds * 1000; 
    setInterval(async() => {
      await this.verifyIsOnline(site);
    }, checkIntervalMs);
  }
}

export { VerifyIsOnlineWithAxios };