export interface ITelegramProvider {
  sendMessage(text: string): Promise<void>
}
