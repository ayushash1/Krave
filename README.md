# Krave - Food Delivery App

A modern food delivery application built with a full-stack approach. Krave enables users to browse restaurants, place orders, and track deliveries in real-time.

## Project Overview

Krave is a clone food delivery application designed to demonstrate full-stack web development using modern technologies. The application features user authentication, restaurant browsing, order management, and more.

## Project Structure

```
krave/
├── backend/              # Node.js/Express backend server
│   ├── src/
│   │   ├── index.js     # Main server entry point
│   │   ├── config/      # Configuration files (database, etc.)
│   │   ├── controllers/ # Route controllers
│   │   ├── middlewares/ # Custom middleware
│   │   ├── models/      # Database models
│   │   ├── routes/      # API routes
│   │   └── utils/       # Utility functions
│   └── package.json
│
└── frontend/            # React/Vite frontend application
    ├── src/
    │   ├── main.jsx     # React entry point
    │   ├── App.jsx      # Main App component
    │   ├── assets/      # Images, fonts, etc.
    │   └── components/  # React components
    ├── public/          # Static assets
    ├── index.html       # HTML template
    ├── vite.config.js   # Vite configuration
    └── package.json
```

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (configured)
- **Authentication**: JWT with Cookie-based sessions
- **Utilities**: dotenv, CORS, Cookie Parser

### Frontend
- **Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: CSS
- **HTTP Client**: Fetch API

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```
PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
```

4. Start the backend server:
```bash
npm start
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory (if needed) with API configuration:
```
VITE_API_BASE_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

The frontend will typically run on `http://localhost:5173`

## API Endpoints

### Authentication Routes
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/signin` - Login user
- `POST /api/auth/signout` - Logout user (clears session/token)

## Current Status

🚀 **Early Stage Development** - This project is currently in its initial stages with core infrastructure being set up.

## Features

### ✅ Implemented
- User Authentication (Sign up, Sign in, Sign out)
- 🔒 Secure JWT-based authentication with cookie-based sessions
- Backend API structure with Express.js
- Frontend initialized with React + Vite

### 🔄 Coming Soon
- 🍔 Browse restaurants and food items
- 🛒 Shopping cart functionality
- 📦 Order placement and tracking
- 👤 User profile management
- 💳 Payment integration
- 📍 Real-time order tracking
- ⭐ Ratings and reviews
- 📱 Responsive design optimizations

## Development

### Running Both Services

Terminal 1 - Backend:
```bash
cd backend
npm start
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

### Common Issues

See [backend/TROUBLESHOOTING.md](backend/TROUBLESHOOTING.md) for backend-specific issues and solutions.

## Contributing

1. Create a new branch for your feature
2. Commit your changes
3. Push to your branch
4. Submit a pull request

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please reach out to the development team.

---

**Happy coding! 🚀**
