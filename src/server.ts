import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import requireDir from "require-dir";
import { databaseConnect } from "./database/Connection";
import { logBuilder } from './log/logBuilder';
dotenv.config();
const app = express();
const port = process.env.PORT || 5500;

app.use(cors()); // Cross-origin resource sharing
app.use(express.json()); // Accepts json

databaseConnect(); // Database connection
requireDir("./models"); // Creating mongodb model

import routes from "./routes";
app.use(logBuilder, routes); // Application routes

app.listen(port, () => {
    const apiUrl = process.env.API_URL || `http://localhost:${port}`;
    console.log(`[✔] Project running on ${apiUrl}`);
});
