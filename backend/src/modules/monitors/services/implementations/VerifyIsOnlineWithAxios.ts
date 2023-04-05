/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from "axios";
import logger from "../../../../shared/log/logger";
import { IMonitorsRepository } from "../../repositories/IMonitorsRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { HandleAlerts } from "../../../alerts/services/implementations/HandleAlerts";
import { TelegrafProvider } from "../../../../providers/implementations/TelegrafProvider";

class VerifyIsOnlineWithAxios implements IMonitorsRepository {
  private instance: AxiosInstance;
  // private baseURL = process.env.URL_TO_MONITOR;
  private timeoutMillisecondsToSeconds = 4 * 1000;
  private checkIntervalInSeconds = process.env.CHECK_INTERVAL_IN_SECONDS || 60;
  private handleAlerts: HandleAlerts;


  constructor() {
    this.instance = axios.create({
      withCredentials: false,
      timeout: this.timeoutMillisecondsToSeconds,
      headers: {
        "X-Custom-Header": "foobar",
      }
    });
    const telegrafProvider = new TelegrafProvider();
    this.handleAlerts = new HandleAlerts(telegrafProvider);
  }

  async verifyIsOnline(site: string): Promise<void> {
    try {
      const response = await this.instance.get(site).catch(() => {
        throw new AppError("Website is offline!", 400);
      });
      logger.info(`Website ${site} is online! status: ${response.status}`);
      await this.handleAlerts.execute("online", site);
    } catch (error: any) {
      await this.handleAlerts.execute("offline", site);
      logger.error(`Website ${site} is offline! Erro: ${error.message}`);
      
    }
  }

  async onlineStatusCheckInterval(site: string): Promise<void> {
    const checkIntervalMs = +this.checkIntervalInSeconds * 1000;
    setInterval(async () => {
      await this.verifyIsOnline(site);
    }, checkIntervalMs);
  }
}

export { VerifyIsOnlineWithAxios };