# NestJS Microservices: Authentication and Movies

This project consists of two independent microservices built with the **NestJS** framework:

1. **Auth Service**: Handles user authentication (signup and login) with a MongoDB database.
2. **Movies Service**: Manages movie data with a separate MongoDB database.

Each microservice is deployed independently and connects to a different MongoDB database.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Auth Service](#auth-service)
  - [Endpoints](#auth-service-endpoints)
- [Movies Service](#movies-service)
  - [Endpoints](#movies-service-endpoints)
- [Environment Variables](#environment-variables)
- [Running the Services](#running-the-services)
- [Technologies Used](#technologies-used)

---

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (running locally or via a cloud service like MongoDB Atlas)
- **npm** (v6 or higher)

---

## Project Structure

```
.
├── auth-service/
│   ├── src/
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.module.ts
│   │   │   └── schemas/
│   │   │       └── user.schema.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── .env
└── movies-service/
    ├── src/
    │   ├── movies/
    │   │   ├── movies.controller.ts
    │   │   ├── movies.service.ts
    │   │   ├── movies.module.ts
    │   │   └── schemas/
    │   │       └── movie.schema.ts
    │   ├── app.module.ts
    │   └── main.ts
    └── .env
```

---

## Auth Service

### Overview

The **Auth Service** provides user authentication features, including signup and login. It uses MongoDB to store user credentials securely.

### Endpoints

1. **Signup**
   - **URL**: `POST /auth/signup`
   - **Request Body**:
     ```json
     {
       "email": "user@example.com",
       "password": "password123"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "User created successfully",
       "userId": "<user_id>"
     }
     ```

2. **Login**
   - **URL**: `POST /auth/login`
   - **Request Body**:
     ```json
     {
       "email": "user@example.com",
       "password": "password123"
     }
     ```
   - **Response**:
     ```json
     {
       "token": "<jwt_token>"
     }
     ```

---

## Movies Service

### Overview

The **Movies Service** allows users to add and retrieve movie data. It uses a separate MongoDB database.

### Endpoints

1. **Add Movie**
   - **URL**: `POST /movies`
   - **Request Body**:
     ```json
     {
       "title": "Inception",
       "description": "A mind-bending thriller",
       "releaseYear": 2010
     }
     ```
   - **Response**:
     ```json
     {
       "_id": "<movie_id>",
       "title": "Inception",
       "description": "A mind-bending thriller",
       "releaseYear": 2010
     }
     ```

2. **Get All Movies**
   - **URL**: `GET /movies`
   - **Response**:
     ```json
     [
       {
         "_id": "<movie_id>",
         "title": "Inception",
         "description": "A mind-bending thriller",
         "releaseYear": 2010
       }
     ]
     ```

---

## Environment Variables

Each service has its own `.env` file to store configuration variables.

### Auth Service `.env`

```
MONGODB_URI=mongodb://localhost:27017/auth-db
JWT_SECRET=your_secret_key
```

### Movies Service `.env`

```
MONGODB_URI=mongodb://localhost:27017/movies-db
```

---

## Running the Services

### 1. Install Dependencies

For both `auth-service` and `movies-service`, run:

```bash
npm install
```

### 2. Start MongoDB

Ensure MongoDB is running locally or provide a cloud MongoDB connection string in the `.env` file.

### 3. Run the Auth Service

In the `auth-service` directory:

```bash
npm run start:dev
```

The service will run at `http://localhost:3000`.

### 4. Run the Movies Service

In the `movies-service` directory:

```bash
npm run start:dev
```

The service will run at `http://localhost:4000` (or another port if adjusted).

---

## Technologies Used

- **NestJS**: A progressive Node.js framework.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM library for MongoDB.
- **bcryptjs**: For hashing passwords.
- **jsonwebtoken**: For generating JWT tokens.

---