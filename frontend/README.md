# Workout MERN App - Frontend

## Overview

This is the frontend for the Workout MERN (MongoDB, Express, React, Node.js) app that allows users to create, read, update, and delete workouts. The frontend is built using React.js and communicates with the backend RESTful APIs to perform CRUD operations.

## Getting Started

To run this app locally, you need to have the following installed on your machine:

- Node.js
- MongoDB
- The backend server running

Once you have these installed and the backend server is running, follow these steps:

1. Clone the repository to your local machine:

```sh
git clone https://github.com/arsy786/workout-mern-app.git
```

2. Change directory to the frontend folder:

```sh
cd workout-mern-app/frontend
```

3. Install the required packages:

```sh
npm install
```

4. Add a proxy attribute in the package.json file with the following:

```json
{
	"proxy": "http://localhost:4000"
}
```

5. Start the client:

```sh
npm start
```

6. Open your browser and navigate to http://localhost:3000

## Features

The frontend provides the following features:

    Display a list of all workouts
    Add a new workout
    Edit an existing workout
    Delete an existing workout
    User authentication (register and login)
    User authorization (restricted access to certain pages)

## Technologies

This app was built using the following technologies:

    React.js
    React Router
    Axios
    Bootstrap
    JWT Decode
