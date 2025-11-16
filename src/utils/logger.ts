/* eslint-disable no-console */
import colors from "colors";

const logger = {
  log: (msg: string) => console.log(`[LOG]: ${colors.white.bold(msg)}`),

  info: (msg: string, meta?: unknown) =>
    console.log(
      `[INFO]: ${colors.blue.bold(msg)}`,
      meta ? colors.gray(String(meta)) : "",
    ),

  error: (msg: string, meta?: unknown) =>
    console.error(
      `[ERROR]: ${colors.red.bold(msg)}`,
      meta ? colors.gray(String(meta)) : "",
    ),

  warning: (msg: string, meta?: unknown) =>
    console.warn(
      `[WARNING]: ${colors.yellow.bold(msg)}`,
      meta ? colors.gray(String(meta)) : "",
    ),

  debug: (msg: string, meta?: unknown) =>
    console.debug(
      `[DEBUG]: ${colors.magenta.bold(msg)}`,
      meta ? colors.gray(String(meta)) : "",
    ),

  success: (msg: string) => console.log(`[SUCCESS]: ${colors.green.bold(msg)}`),
};

export default logger;
