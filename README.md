
# Inventory Management Backend

A simple backend REST API to manage users and products for inventory management using Node.js, Express, MongoDB, and JWT authentication.

## Features

- User authentication (login with JWT)
- Add new products
- Update product quantity
- Get paginated list of products
- Secure routes with JWT middleware
- API documentation with Swagger
- Postman collection for easy testing

## Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT) for authentication
- bcryptjs (for password hashing)
- dotenv (for environment variables)
- cors (Cross-Origin Resource Sharing)
- Swagger (API documentation)

## Setup Instructions

### Prerequisites

- Node.js installed (v14+ recommended)
- MongoDB installed and running locally or use MongoDB Atlas (cloud)
- Git installed

### Clone the repository

```bash
git clone https://github.com/yourusername/inventory-management-backend.git
cd inventory-management-backend
````

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file in the project root with the following variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Replace `your_mongodb_connection_string` with your MongoDB connection URI.

### Start the server

```bash
npm start
```

The server will run on `http://localhost:5000` (or the port you set).

---

## API Endpoints

### 1. User Authentication

* **POST** `/login`

  Request body:

  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

  Response:

  * Success: JWT token
  * Failure: Error message

### 2. Add Product

* **POST** `/products`

  Requires Authentication (send JWT in `Authorization` header)

  Request body:

  ```json
  {
    "name": "string",
    "type": "string",
    "sku": "string",
    "image_url": "string",
    "description": "string",
    "quantity": integer,
    "price": number
  }
  ```

  Response: Newly created product ID and confirmation

### 3. Update Product Quantity

* **PUT** `/products/{id}/quantity`

  Requires Authentication

  Request body:

  ```json
  {
    "quantity": integer
  }
  ```

  Response: Updated product details or confirmation message

### 4. Get Products

* **GET** `/products`

  Requires Authentication

  Supports pagination with query parameters:

  * `page` (default: 1)
  * `limit` (default: 10)

  Response: List of products with pagination info

---

## API Documentation

Swagger API docs available at:

```
http://localhost:5000/api-docs
```

---

## Testing

You can use the provided Postman collection `postman_collection.json` to test all the endpoints easily.

---

## Additional Notes

* Passwords are hashed using bcryptjs for security.
* JWT tokens are used to protect routes.
* Error handling and validation are implemented.
* Feel free to extend with admin portal, analytics, or frontend integration.

---

## License

This project is licensed under the MIT License.

---

## Author

Neeraj Kumar

