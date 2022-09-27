import process from "process";

export const isDevelopementEnvironment = (): boolean => {
  return !process.env.NODE_ENV || process.env.NODE_ENV === "development";
};
