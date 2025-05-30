import { Request, Response } from "express";
import shortid from "shortid";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { verifyIfHasHttpProtocol } from "../utils/protocolChecker";
dotenv.config();
const UrlSchema = mongoose.model("Urls");

export const Shorter = async (req: Request, res: Response) => {
    // Verify if url exists
    const { originUrl } = req.body;
    const url = await UrlSchema.findOne({ originUrl });

    if (url) return res.json(url);
    // Create a hash for this url
    const hash = shortid.generate();
    const shortUrl = `${process.env.API_URL}/${hash}`;
    // Save in database
    const newUrl = await UrlSchema.create({ hash, shortUrl, originUrl });
    console.log("[✔] New Url was registered")
    // Return the shortened url
    return res.json(newUrl);
};

export const Redirect = async (req: Request, res: Response) => {
    // Take url's hash
    const { hash } = req.params;
    // Find the original url from hash
    const url: any = await UrlSchema.findOne({ hash });
    // Redirect to origin hash finded in database
    if (url) {
        const originUrl = verifyIfHasHttpProtocol(url.originUrl);
        return res.redirect(originUrl);
    }
    return res.status(404).json({ message: "Not Found" });
};
