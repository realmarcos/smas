import { ITelegramProvider } from "../../../../providers/ITelegramProvider";
import logger from "../../../../shared/log/logger";

class HandleAlerts {
  private status: "online" | "offline";
  constructor(private telegramProvide: ITelegramProvider) {
    this.status = "online";
  }

  async execute(status: "online" | "offline", site: string) {
    const today = new Date().toLocaleString();

    if (status === "offline" && this.status === "online") {
      this.telegramProvide.sendMessage(`Aplicação ${site} está offline.\n\nData e hora: ${today}`);
      logger.warn("send offline alert... ");
      this.status = status;
    }
    
    if (this.status === "offline" && status === "online") {
      this.telegramProvide.sendMessage(`Aplicação ${site} está online novamente.\n\nData e hora: ${today}`);
      logger.warn("send alert that returned to online...");
      this.status = status;
    }
  }
}

export { HandleAlerts };