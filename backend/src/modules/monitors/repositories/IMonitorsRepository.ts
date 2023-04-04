
interface IMonitorsRepository {
  verifyIsOnline(site: string): Promise<void>;
  onlineStatusCheckInterval(site: string): void;
}

export {IMonitorsRepository};