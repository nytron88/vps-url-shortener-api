import { Request, Response, NextFunction } from "express";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

export const logBuilder = (req: Request, res: Response, next: NextFunction) => {
  console.log("[✔] Middleware running");
  const { method, path } = req;
  const apiUrl =
    process.env.API_URL || `http://localhost:${process.env.PORT || 5500}`;
  const baseUrl = new URL(apiUrl).host;
  const dateNow = new Date().toLocaleString().replace(",", " -");
  const logText = `[${method}] ${baseUrl}${path} [${dateNow}]\n`;
  fs.appendFile("logs.txt", logText, () => {});
  next();
};
