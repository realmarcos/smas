import { format } from "date-fns";
import pino from "pino";

const timeFormat = "dd/MM/yyyy - HH:mm:ss";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      ignore: "pid,hostname",
    },
  },
  timestamp: () => `,"time":"${format(new Date(), timeFormat)}"`,
});

export default logger;
