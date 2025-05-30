import { Request, Response, NextFunction } from "express";
import fs from 'fs';

export const logBuilder = (req: Request, res: Response, next: NextFunction) => {
    console.log("[✔] Middleware running");
    const { method, path } = req;
    const { host } = req.headers;
    const dateNow = new Date().toLocaleString().replace(",", " -");
    const logText = `[${method}] ${host}${path} [${dateNow}]\n`;
    fs.appendFile('logs.txt', logText, () => {});
    next();
};
