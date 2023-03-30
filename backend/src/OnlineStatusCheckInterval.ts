import VerifyIsOnline from "./VerifyIsOnline";

const OnlineStatusCheckInterval = () => { 
  const checkIntervalMs = 1 * 60 * 1000;
  
  setInterval(async () => {
    await VerifyIsOnline();
  }, checkIntervalMs);
};

export default OnlineStatusCheckInterval;