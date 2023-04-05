import { ITelegramProvider } from "../ITelegramProvider";
import { Telegraf } from "telegraf";

class TelegrafProvider implements ITelegramProvider {
  private bot: Telegraf;
  private token: string;
  private chatId: string | number;
  constructor() {
    this.token = process.env.TELEGRAM_TOKEN || "";
    this.chatId = process.env.TELEGRAM_CHAT_ID|| "";
    this.bot = new Telegraf(this.token);
  }
  async sendMessage(text: string): Promise<void> {
    try {
      await this.bot.telegram.sendMessage(this.chatId, text);
    } catch (err) {
      console.log(err);
    }
  }

}

export { TelegrafProvider };