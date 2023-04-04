import VerifyIsOnline from "./VerifyIsOnline";

const OnlineStatusCheckInterval = () => { 
  const checkIntervalMs = 1 * 60 * 1000;
  
  setInterval(async () => {
    await VerifyIsOnline();
  }, 6000);
};

export default OnlineStatusCheckInterval;