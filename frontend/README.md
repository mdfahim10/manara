# Manara Backend

Backend API for **Manara**, an Islamic learning and audio application built with React.

Manara provides audio collections and learning content covering Quran Tafseer, the life of Prophet Muhammad ﷺ, the Sahaba and Sahabiyat, and Namaz.

The backend will manage collections, episodes, and audio metadata, and provide APIs for the React frontend.

## Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — Backend API framework
- **MongoDB** — Database for collections and episode metadata
- **Mongoose** — MongoDB object modeling
- **CORS** — Cross-origin communication between frontend and backend
- **dotenv** — Environment variable management
- **Nodemon** — Development server with automatic restarts

## Project Structure

```text
Manara/
├── src/                    # React frontend
│   └── assets/
│       └── assets.js        # Existing frontend collections and songs
│
├── backend/
│   ├── server.js            # Backend entry point
│   ├── package.json          # Backend dependencies and scripts
│   ├── package-lock.json     # Dependency lock file
│   ├── .env                  # Local environment variables
│   ├── .gitignore            # Files excluded from Git
│   └── README.md              # Backend documentation
│
└── package.json               # Frontend package configuration
```

The structure above describes the intended setup. Additional folders for models, routes, and controllers can be added as the backend grows.

## Prerequisites

Install the following before running the backend:

- Node.js and npm
- MongoDB, either locally or through MongoDB Atlas
- Git (optional, for version control)

Check your Node.js and npm versions:

```bash
node -v
npm -v
```

## Installation

### 1. Navigate to the backend

From the Manara project root:

```bash
cd backend
```

### 2. Install dependencies

If the backend project has already been initialized:

```bash
npm install
```

If setting it up from scratch:

```bash
npm init -y
npm install express cors dotenv mongoose
npm install --save-dev nodemon
```

### 3. Configure package.json

The backend package should use ES modules and include development and production scripts.

```json
{
  "name": "manara-backend",
  "version": "1.0.0",
  "description": "Backend API for Manara Islamic learning app",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/manara
```

For MongoDB Atlas, replace the local MongoDB connection string with your Atlas connection string.

**Security:** Never commit `.env` or expose database credentials in the React frontend.

## Running the Backend

### Development

Start the development server:

```bash
npm run dev
```

Nodemon will restart the server when backend files change.

### Production

Start the server using:

```bash
npm start
```

The backend will use the configured port, which defaults to `5000` when no other value is supplied.

## API Overview

The planned API will support the following operations.

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Check backend status |
| GET | `/api/collections` | Retrieve all collections |
| GET | `/api/collections/:id` | Retrieve a collection |
| GET | `/api/collections/:id/episodes` | Retrieve episodes in a collection |
| GET | `/api/episodes/:id` | Retrieve episode metadata |

These endpoints describe the planned API. They will become available as their routes are implemented.

## Manara Collections

The initial content plan includes:

1. Quran Tafseer by Dr. Israr Ahmed — 108 episodes
2. Our Prophet ﷺ — Seerah and learning about the Prophet's life
3. Our Sahaba and Sahabiyat — stories and lessons from the companions
4. Namaz — learning about Salah and its importance

The existing frontend data in `src/assets/assets.js` contains collection and song information. The backend will gradually take responsibility for storing and serving this content.

Actual episode titles, audio files, and durations must be added when their source content is available.

## Audio Architecture

The backend will initially store audio metadata, such as:

- Episode title
- Collection reference
- Audio URL or file location
- Duration
- Description
- Thumbnail

The React frontend will continue using its audio player to play tracks. The backend will provide the metadata and audio locations.

Audio files may eventually be hosted on a dedicated object storage or media hosting service rather than stored directly in MongoDB.

## Development Roadmap

- [ ] Initialize the Express server
- [ ] Configure MongoDB connection
- [ ] Create collection and episode models
- [ ] Implement collection API routes
- [ ] Implement episode API routes
- [ ] Connect React frontend to the backend
- [ ] Add the 108 Quran Tafseer episodes
- [ ] Add Seerah, Sahaba and Sahabiyat, and Namaz content
- [ ] Configure audio hosting and playback URLs
- [ ] Add validation and error handling
- [ ] Deploy the backend

## Git and Environment Safety

Recommended `.gitignore` entries:

```gitignore
node_modules/
.env
dist/
```

Do not commit credentials, private database connection strings, or local environment files.

## License

This project is currently under development. A license can be added when the project's distribution terms are decided.
