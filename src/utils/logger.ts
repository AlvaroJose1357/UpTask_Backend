/* eslint-disable no-console */
import colors from "colors";

export const logger = (msg: string) =>
  console.log(`[LOG]: ${colors.white.bold(msg)}`);
export const InfoLogger = (msg: string, meta?: unknown) =>
  console.log(
    `[INFO]: ${colors.blue.bold(msg)}`,
    meta ? colors.gray(String(meta)) : "",
  );
export const ErrorLogger = (msg: string, meta?: unknown) =>
  console.error(
    `[ERROR]: ${colors.red.bold(msg)}`,
    meta ? colors.gray(String(meta)) : "",
  );
export const WarningLogger = (msg: string, meta?: unknown) =>
  console.warn(
    `[WARNING]: ${colors.yellow.bold(msg)}`,
    meta ? colors.gray(String(meta)) : "",
  );
export const DebugLogger = (msg: string, meta?: unknown) =>
  console.debug(
    `[DEBUG]: ${colors.magenta.bold(msg)}`,
    meta ? colors.gray(String(meta)) : "",
  );
export const SuccessLogger = (msg: string) =>
  console.log(`[SUCCESS]: ${colors.green.bold(msg)}`);
