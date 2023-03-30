import {default as ax} from "axios";

const timeoutMillisecondsToSeconds = 4 * 1000;
const baseURL = process.env.URL_TO_MONITOR;

const axios = ax.create({
  baseURL,
  withCredentials: false,
  timeout: timeoutMillisecondsToSeconds,
  headers: { 
    "X-Custom-Header": "foobar", 
  }
});

export default axios;