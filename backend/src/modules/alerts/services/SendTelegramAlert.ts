import { IAlertsRepository } from "../repositories/IAlertsRepository";

class SendTelegramAlert {
  constructor(
    private alertsRepository: IAlertsRepository
  ) { }

  async execute(message: string) {
    this.alertsRepository.sendEmailAlert(message);
  }
}

export { SendTelegramAlert };