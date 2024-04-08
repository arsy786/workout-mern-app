# Workout MERN App (TBC\*)

\*Auth frontend and backend to be complete [MERN Auth Tutorial (YouTube/TheNetNinja)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT)

This is a full-stack MERN (MongoDB, Express, React, Node.js) app for managing workouts. It allows users to create and save workout routines and track their progress over time.
This project was built following the [MERN Stack Crash Course Tutorial (YouTube/TheNetNinja)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE) playlist on YouTube.

## Branches

    - master: same as react-context branch
    - no-state-management: frontend is typical react app separated into components and WITHOUT any state management.
    - react-context: same as above branch except implemented react context into the frontend.

## Features

The app provides the following features:

    - Users can create, read, update, and delete workouts
    - Workouts are stored in a MongoDB database
    - Register, Login and Logout*
    - User authentication with JSON Web Tokens (JWT)*

Note: The app requires a MongoDB database to be running in order to work properly.

## Installation

To install this application, you will need to have Node.js and MongoDB installed on your system.

Once you have these installed, follow these steps:

1. Clone the repository: `git clone https://github.com/arsy786/workout-mern-app.git`
2. Install the dependencies:

- `cd workout-mern-app/backend && npm install`
- `cd workout-mern-app/frontend && npm install`

3. Set up the environment variables by creating a .env file in the backend directory with the following variables:

```env
PORT=5000
MONGODB_URI=<Your MongoDB connection string>
JWT_SECRET=<Your JWT secret>
```

4. Add a proxy attribute in the frontend package.json file with the following:

```json
{
	"proxy": "http://localhost:4000"
}
```

5. Start the backend and frontend development servers:

- Backend: `cd workout-mern-app/backend && npm run dev` or `npm run start`
- Frontend: `cd workout-mern-app/frontend && npm start`

## Usage

Once the server is running, you can access the application at http://localhost:3000.

### Backend

The backend provides a REST API for managing workouts. Here are the available endpoints:

    GET /api/workouts - Get all workouts.
    GET /api/workouts/:id - Get a workout by ID.
    POST /api/workouts - Create a new workout routine.
    PATCH /api/workouts/:id - Update a workout by ID.
    DELETE /api/workouts/:id - Delete a workout by ID.
    POST /api/auth/register - Register a new user
    POST /api/auth/login - Log in an existing user

### Frontend

The app provides the following features:

    - View a list of workouts
    - Create a new workout
    - Update a workout
    - Delete a workout
    - User authentication (register and login)
    - User authorization (restricted access to certain pages)

Note: The app requires the backend server to be running in order to work properly.
