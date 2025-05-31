# URL Shortener API

A basic URL shortener API built for learning VPS deployment and server management.

## Environment Setup

Create a `.env` file with the following variables:
```
MONGO_CONNECTION=mongodb://localhost:27017/url-shortener
API_URL=http://localhost:5500
PORT=5500
```

## API Endpoints

**POST `/shorter`** - Create a shortened URL
```bash
curl -X POST http://localhost:5500/shorter \
  -H "Content-Type: application/json" \
  -d '{"originUrl": "https://example.com"}'
```

**GET `/:hash`** - Redirect to original URL
```bash
curl http://localhost:5500/{shortCode}
```

## Deployment

This API was deployed on a VPS using nginx for reverse proxy and rate limiting. 

Built with TypeScript, Express.js, and MongoDB for learning VPS deployment and basic API development.
