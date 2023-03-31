
interface IMonitorsRepository {
  verifyIsOnline(site: string): Promise<void>;
  onlineStatusCheckInterval(): void;
}

export {IMonitorsRepository};