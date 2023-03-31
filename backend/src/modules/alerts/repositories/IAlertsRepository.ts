

interface IAlertsRepository {
  sendEmailAlert(message: string): Promise<void>;
  sendTelegramAlert(message: string): Promise<void>;
}

export { IAlertsRepository };