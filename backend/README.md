# Workout MERN App - Backend

## Overview

This is the backend for the Workout MERN (MongoDB, Express, React, Node.js) app that allows users to create, read, update, and delete workouts. The backend is built using Node.js and Express.js and provides RESTful APIs for the frontend to consume. The app follows the CRUD (Create, Read, Update, Delete) operations.

## Getting Started

To run this app locally, you need to have the following installed on your machine:

- Node.js
- MongoDB

Once you have these installed, follow these steps:

1. Clone the repository to your local machine:

```sh
git clone https://github.com/arsy786/workout-mern-app.git
```

2. Change directory to the backend folder:

```sh
cd workout-mern-app/backend
```

3. Install the required packages:

```sh
npm install
```

4. Create a .env file in the root folder and add the following:

```env
PORT=5000
MONGODB_URI=<Your MongoDB connection string>
JWT_SECRET=<Your JWT secret>
```

5. Start the server:

```sh
npm run dev
```

## API Endpoints

The backend provides the following RESTful API endpoints:

    GET /api/workouts - get all workouts
    GET /api/workouts/:id - get a workout with the specified ID
    POST /api/workouts - create a new workout
    PUT /api/workouts/:id - update a workout with the specified ID
    DELETE /api/workouts/:id - delete a workout with the specified ID
    POST /api/auth/register - register a new user
    POST /api/auth/login - log in an existing user

## Technologies

This app was built using the following technologies:

    Node.js
    Express.js
    MongoDB
    Mongoose
    JSON Web Tokens (JWT)
    Bcrypt
