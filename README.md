# User CRUD API

A RESTful API for managing users, built with Node.js, Express, and MySQL.

## Project Overview

This project implements a backend service for User management with full CRUD operations. It follows the MVC architecture and includes comprehensive error handling, input validation, and logging.

## Tech Stack

- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MySQL 8**: Database
- **mysql2**: MySQL client (using connection pooling)
- **Joi**: Input validation
- **dotenv**: Environment variable management
- **Helmet**: Security headers
- **Morgan**: HTTP request logger
- **Cors**: Cross-Origin Resource Sharing

## Prerequisites

- __Node.js__ (v14 or higher)
- __MySQL__ (v8.0) installed and running

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd user-crud-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory (or copy `.env.example` if available):
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your database credentials:
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=user_crud_db
   NODE_ENV=development
   ```

## Database Setup

1. Log in to your MySQL server:
   ```bash
   mysql -u root -p
   ```

2. Run the provided SQL script to create the database and table:
   ```sql
   source sql/setup.sql;
   ```
   
   *Alternatively, you can copy the contents of `sql/setup.sql` and run them manually in your SQL client.*

## Running the Project

- **Development Mode** (with hot reloading):
  ```bash
  npm run dev
  ```

- **Production Mode**:
  ```bash
  npm start
  ```

The server will start on plain HTTP at `http://localhost:3000` (or your configured PORT).

## API Endpoints

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/users` | Get all users | None |
| **GET** | `/api/users/:id` | Get user by ID | None |
| **POST** | `/api/users` | Create a new user | `{ "name": "John", "email": "john@example.com", "age": 30 }` |
| **PUT** | `/api/users/:id` | Update a user | `{ "name": "John Doe", "email": "john@example.com", "age": 31 }` |
| **DELETE** | `/api/users/:id` | Delete a user | None |

### Sample Request (Create User)
**POST** `/api/users`
```json
{
  "name": "Alice Smith",
  "email": "alice@example.com",
  "age": 25
}
```

### Sample Response
```json
{
  "id": 1,
  "name": "Alice Smith",
  "email": "alice@example.com",
  "age": 25
}
```

## Error Handling

The API uses a centralized error handling mechanism.
- **400 Bad Request**: Validation errors (e.g., missing fields, invalid email format).
- **404 Not Found**: Resource not found.
- **409 Conflict**: Duplicate email address.
- **500 Internal Server Error**: Unexpected server errors.

## Folder Structure

```
user-crud-api/
├── node_modules/
├── sql/
│   └── setup.sql       # Database creation script
├── src/
│   ├── config/
│   │   └── db.js       # Database connection pool
│   ├── controllers/
│   │   └── userController.js # Request handling logic
│   ├── models/
│   │   └── userModel.js      # Data access layer
│   ├── routes/
│   │   └── userRoutes.js     # API route definitions
│   ├── utils/
│   │   ├── errorHandler.js   # Validation schemas
│   │   └── validation.js     # Global error handler
│   └── app.js          # App entry point
├── .env                # Environment variables
├── .gitignore
├── package.json
└── README.md
```
