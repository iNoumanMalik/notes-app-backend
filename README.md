# Notes App - Backend

A RESTful API backend for a notes management application built with Node.js, Express, and MongoDB.

## Features

- **User Authentication**: JWT-based authentication system
- **CRUD Operations**: Create, read, update, and delete notes
- **User-specific Notes**: Each user can only access their own notes
- **Secure**: Password hashing with bcrypt
- **CORS Enabled**: Cross-origin resource sharing support

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **bcrypt**: Password hashing
- **CORS**: Cross-origin resource sharing

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend root directory:
   ```env
   PORT=8000
   MONGO_URL=mongodb://localhost:27017/notes-app
   JWT_SECRET=your-secret-key-here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   Or for production:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Notes (Protected Routes)

- `GET /api/notes` - Get all notes for authenticated user
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a specific note
- `DELETE /api/notes/:id` - Delete a specific note

## Project Structure

```
backend/
├── src/
│   ├── middlewares/
│   │   └── auth.js          # JWT authentication middleware
│   ├── models/
│   │   ├── notes.model.js   # Note schema
│   │   └── users.model.js   # User schema
│   ├── routes/
│   │   ├── auth.js          # Authentication routes
│   │   └── notes.js         # Notes CRUD routes
│   └── server.js            # Main server file
├── package.json
└── README.md
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 8000 |
| MONGO_URL | MongoDB connection string | Required |
| JWT_SECRET | Secret key for JWT tokens | Required |

## Development

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Protected routes with middleware
- User-specific data access
- Input validation and sanitization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

ISC License