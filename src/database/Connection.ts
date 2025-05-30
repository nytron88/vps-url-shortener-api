import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const databaseConnect = async () => {
    try {
        await mongoose.connect(String(process.env.MONGO_CONNECTION), { 
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log("[✔] Connected with database")
    } catch (error) {
        throw new Error(error);
    }    
};