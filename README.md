# Workout MERN App

This is a simple Workout app designed for managing workouts with ease. The app is built using the MERN (MongoDB, Express, React, Node.js) stack and supports essential CRUD (Create, Read, Update, Delete) operations. It utilizes MongoDB for database management, Express and Node.js for server-side functionality, and React for a dynamic front-end user experience.

This project was built following the below tutorials:

- [MERN Stack Crash Course Tutorial (YouTube/TheNetNinja)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE)
- [MERN Auth Tutorial (YouTube/TheNetNinja)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT)

## Branches

    - master: components, react-context, auth
    - react-context: components, react-context
    - no-state-management: components

## Getting Started

This project is divided into two main parts: the backend and the frontend. Follow these steps to set up and run both parts of the application.

### Prerequisites

- Node.js
- MongoDB

### Cloning the Repo

1. Open your terminal or command prompt.

2. Clone the repository using Git:

   ```bash
   git clone https://github.com/arsy786/workout-mern-app.git
   ```

3. Navigate to the cloned repository's root directory

   ```bash
   cd workout-mern-app
   ```

### Setting up the Backend

1. From the root directory, navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install the required Node.js modules:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following:

   ```env
   PORT=4000
   MONGO_URI=<Your MongoDB connection string>
   SECRET=<Your JWT secret key>
   ```

4. Start the backend:

   ```bash
   npm run dev
   ```

   The backend should now be running on `http://localhost:4000`.

### Setting up the Client

1. Open a new terminal or command prompt window.

2. From the root directory, navigate to the frontend directory:

   ```bash
   cd frontend
   ```

3. Install the required Node.js modules:

   ```bash
   npm install
   ```

4. In the `package.json` file in the frontend directory, add the following:

   ```json
     "proxy": "http://localhost:4000",
   ```

   This proxy setting forwards API requests to the backend server running on port 4000. For example, when the React app makes an API request like fetch('/api/data'), it will actually be routed to http://localhost:4000/api/data due to the proxy configuration.

5. Start the frontend:

   ```bash
   npm run start
   ```

   The frontend should now be running on `http://localhost:3000`.

### Accessing the Application

After starting both the backend and frontend servers, you can access the web application by navigating to `http://localhost:3000` in your web browser. Ensure both servers are running concurrently to allow the frontend to communicate with the backend effectively.

## Backend

The backend provides a REST API for managing workouts & users. Here are the available endpoints:

    - GET /api/workouts - Get all workouts
    - GET /api/workouts/:id - Get a workout by ID
    - POST /api/workouts - Create a new workout
    - PATCH /api/workouts/:id - Update a workout by ID
    - DELETE /api/workouts/:id - Delete a workout by ID

    - POST /api/user/signup - Register a new user
    - POST /api/user/login - Login a user

The API requires user authentication with JSON Web Tokens (JWT). To authenticate a user, send a `POST` request to `/api/user/login` with a JSON body containing the `email` and `password` fields. The server will respond with a JWT, which should be included in subsequent requests to protected endpoints.

## Frontend

The app provides the following features:

    - View a list of workouts
    - Create a new workout
    - Update a workout
    - Delete a workout
