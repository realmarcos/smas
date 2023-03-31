/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from "axios";
// import { AppError } from "../../../../shared/errors/AppError";
import logger from "../../../../shared/log/logger";
import { IMonitorsRepository } from "../../repositories/IMonitorsRepository";

class VerifyIsOnlineWithAxios implements IMonitorsRepository {
  private instance: AxiosInstance;
  private baseURL = process.env.URL_TO_MONITOR;
  private timeoutMillisecondsToSeconds = 4 * 1000;

  constructor() {
    this.instance = axios.create({
      // baseURL: this.baseURL,
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
      // logger.error(`Website ${site} is offline! Erro: ${error.message}`);
      throw new Error("Website offline!");
    }
  }

  onlineStatusCheckInterval(): void {
    throw new Error("Method not implemented.");
  }
}

export { VerifyIsOnlineWithAxios };