import { beforeEach, describe, expect, it } from "vitest";
import { VerifyIsOnlineWithAxios } from "./implementations/VerifyIsOnlineWithAxios";
import { VerifyIsOnline } from "./VerifyIsOnline";

let verifyIsOnlineWithAxios: VerifyIsOnlineWithAxios;
let verifyIsOnline: VerifyIsOnline;

describe("Verify website is online", () => {
  beforeEach(() => {
    verifyIsOnlineWithAxios = new VerifyIsOnlineWithAxios();
    verifyIsOnline = new VerifyIsOnline(verifyIsOnlineWithAxios);
  });

  it("Should be able to return online website", async () => {
    const site = "https://www.google.com.br";
    await expect(verifyIsOnline.execute(site)).resolves.not.toThrow();
  });

  it("Should be able to return offline website error", async () => {
    const site = "https://bararaca.com.br";
    await expect(verifyIsOnline.execute(site)).rejects.toThrow();
  });

  it("Should be able to do return wbesite url is invalid", async () => {
    const site = "https:/bararaca.com.br";
    await expect(verifyIsOnline.execute(site)).rejects.toThrow("Website url is invalid.");
  });

});