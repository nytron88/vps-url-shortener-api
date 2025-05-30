import mongoose from 'mongoose';
const urlSchema = new mongoose.Schema({
    hash: {
        type: String,
        required: true,
    },
    originUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model("Urls", urlSchema);
console.log('[✔] MongoDB model was created');

