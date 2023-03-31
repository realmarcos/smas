import { IAlertsRepository } from "../repositories/IAlertsRepository";

class SendEmailAlert {
  constructor(
    private alertsRepository: IAlertsRepository
  ) { }

  async execute(message: string) {
    this.alertsRepository.sendEmailAlert(message);
  }
}

export { SendEmailAlert };