import { Request, Response, NextFunction } from "express";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

export const logBuilder = (req: Request, res: Response, next: NextFunction) => {
  console.log("[✔] Middleware running");
  const { method, path } = req;

  // Safely construct the API URL with proper fallbacks
  let baseUrl = "localhost";
  try {
    const port = process.env.PORT || "5500";
    const apiUrl = process.env.API_URL || `http://localhost:${port}`;

    // Validate that we have a proper URL before creating URL object
    if (apiUrl && apiUrl.trim() !== "") {
      const urlObj = new URL(apiUrl);
      baseUrl = urlObj.host;
    } else {
      baseUrl = `localhost:${port}`;
    }
  } catch (error) {
    // Fallback to a safe default if URL construction fails
    console.warn("[⚠] Failed to parse API_URL, using default:", error);
    const port = process.env.PORT || "5500";
    baseUrl = `localhost:${port}`;
  }

  const dateNow = new Date().toLocaleString().replace(",", " -");
  const logText = `[${method}] ${baseUrl}${path} [${dateNow}]\n`;
  fs.appendFile("logs.txt", logText, () => {});
  next();
};
