import { beforeEach, describe, expect, it } from "vitest";
import { AppError } from "../../../shared/errors/AppError";
import logger from "../../../shared/log/logger";
import { VerifyIsOnlineWithAxios } from "./implementations/VerifyIsOnlineWithAxios";
import { VerifyIsOnline } from "./VerifyIsOnline";

let verifyIsOnlineWithAxios: VerifyIsOnlineWithAxios;
let verifyIsOnline: VerifyIsOnline;

describe("verify website is online", () => {
  beforeEach(() => {
    verifyIsOnlineWithAxios = new VerifyIsOnlineWithAxios();
    verifyIsOnline = new VerifyIsOnline(verifyIsOnlineWithAxios);
  });

  it("should be able to ", async () => {
    const site = "https://yunix.com.br";
    await expect(verifyIsOnline.execute(site)).resolves.not.toThrow();
  });

  it("should be able to error ", async () => {
    const site = "https://jabutica.com.br";
    // await expect(buyApples()).rejects.toThrow("Website offline!");
    await expect(verifyIsOnline.execute(site)).rejects.toThrow("Website offline!");
  });

});