import { AppError } from "../../../shared/errors/AppError";
import { IMonitorsRepository } from "../repositories/IMonitorsRepository";

class VerifyIsOnline {
  constructor(
    private monitorsRepository: IMonitorsRepository
  ) { }

  private validateSite(url: string): boolean {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  }

  async execute(site: string): Promise<void> {
    const siteIsValid = this.validateSite(site);

    if (!siteIsValid) {
      throw new AppError("Website url is invalid.", 400);
    }
    
    await this.monitorsRepository.verifyIsOnline(site);
  }
}

export { VerifyIsOnline };