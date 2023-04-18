# Workout MERN App (TBC\*)

\*Auth frontend to be complete [MERN Auth Tutorial (YouTube/TheNetNinja)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT)

This is a full-stack MERN (MongoDB, Express, React, Node.js) app for managing workouts. It allows users to create and save workout routines and track their progress over time.
This project was built following the [MERN Stack Crash Course Tutorial (YouTube/TheNetNinja)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE) playlist on YouTube.

## Branches

    - master: same as react-context branch
    - no-state-management: frontend is typical react app separated into components and WITHOUT any state management. 
    - react-context: same as above branch except implemented react context into the frontend.

## Features

The app provides the following features:

    - Sign up and login
    - Create a new workout routine
    - Add exercises to a workout routine
    - View workout routines and exercises
    - Log completed workouts and track progress over time

Note: The app requires a MongoDB database to be running in order to work properly.

## Installation

To install this application, you will need to have Node.js and MongoDB installed on your system.

1. Clone the repository: `git clone https://github.com/arsy786/workout-mern-app.git`
2. Install the dependencies: 

- `cd workout-mern-app/backend && npm install` 
- `cd workout-mern-app/frontend && npm install`

3. Set up the environment variables: 

- Backend: create a .env file in the backend directory with the following variables:

```makefile
PORT=<your Port number>
MONGODB_URI=<your MongoDB connection string>
JWT_SECRET=<your JWT secret key>
```

4. Start the backend and frontend development servers:

- Backend: `cd workout-mern-app/backend && npm run dev`
- Frontend: `cd workout-mern-app/frontend && npm start`

## Usage

Once the server is running, you can access the application at http://localhost:5000.

### Backend

The backend provides a REST API for managing workouts. Here are the available endpoints:

    GET /api/workouts: Get a list of all workout routines.
    POST /api/workouts: Create a new workout routine.
    GET /api/workouts/:id: Get the details of a specific workout routine.
    PATCH /api/workouts/:id: Update a workout routine.
    DELETE /api/workouts/:id: Delete a workout routine.
    
### Frontend

The app provides the following features:

    - View a list of notes
    - Create a new note
    - View the details of a note
    - Update a note
    - Delete a note

Note: The app requires the backend server to be running in order to work properly.
