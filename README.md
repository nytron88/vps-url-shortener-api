# URL Shortener API

A simple URL shortener API built with TypeScript and Express.js for practice VPS deployment.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (see `env.example`):
```
MONGO_CONNECTION=mongodb://localhost:27017/url-shortener
API_URL=http://localhost:5500
PORT=5500
```

3. Start the server:
```bash
npm run dev
```

## API Usage

**Shorten a URL:**
```bash
curl -X POST http://localhost:5500/shorter \
  -H "Content-Type: application/json" \
  -d '{"originUrl": "https://example.com"}'
```

**Access shortened URL:**
```bash
curl http://localhost:5500/{shortCode}
```

## Tech Stack

- TypeScript
- Express.js
- MongoDB
- Node.js

Built for practice VPS deployment and learning.
