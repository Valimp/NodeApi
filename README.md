# CRUD API - NODE / EXPRESS / MONGODB

This is a simple CRUD (Create, Read, Update, Delete) API for managing user data in MongoDB. It uses Node.js and the Express framework to handle HTTP requests and responses.

## Setup

To use this API, you will need to have the following installed on your system:

Node.js
MongoDB
You will also need to create a MongoDB database and collection for storing user data.

You have to create a .env file with `DATABASE_URL="[your database_url]"` and `PORT=[your port]` 

Once you have everything installed and set up, clone this repository and run npm install to install the necessary dependencies.

## Usage

To start the API, run `npm start`. This will start the server on port 3000 (or another port of your choice).

The API provides the following endpoints:

- `GET /users/:id` - Returns a single user with the specified ID.
- `POST /users` - Adds a new user to the database. Requires a JSON payload with the following fields: name, email, and password.
- `PATCH /users/:id` - Updates an existing user with the specified ID. Requires a JSON payload with one or more of the following fields: name, email, or password.
- `DELETE /users/:id` - Deletes a user with the specified ID. 

All responses are returned in JSON format.

## Targets

- [ ] Create a CRUD API
- [ ] Create a JWT authentication
- [ ] Prepare MERN application ( MongoDB, Express, React, Node )
- [ ] Use units tests with JEST

This list may be updated..