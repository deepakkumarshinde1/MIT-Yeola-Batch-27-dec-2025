Postman API Documentation

Base URL: `http://localhost:3030`

---

**Collection Overview:**

- GET /welcome — simple welcome message
- GET /products — returns product list from `db/products.js`
- POST /create-account — accepts user details and echoes them back
- POST /login — accepts credentials and echoes them back

---

**Common Headers**

- Content-Type: application/json

---

## 1) GET /welcome

- HTTP Method: GET
- URL: `http://localhost:3030/welcome`

Sample Response (200):

```json
{
  "message": "Welcome to node / express js"
}
```

---

## 2) GET /products

- HTTP Method: GET
- URL: `http://localhost:3030/products`

Sample Response (200) — truncated products array (actual file contains 30 items):

```json
{
  "message": "Product List",
  "products": [
    {
      "id": 1,
      "name": "Wireless Mouse",
      "price": 799,
      "discount": 10,
      "qty": 120,
      "artifact": "electronics",
      "rating": 4.3,
      "images": ["mouse1.jpg", "mouse2.jpg"]
    },
    {
      "id": 2,
      "name": "Mechanical Keyboard",
      "price": 2499,
      "discount": 15,
      "qty": 60,
      "artifact": "electronics",
      "rating": 4.6,
      "images": ["keyboard1.jpg"]
    },
    {
      "id": 3,
      "name": "USB-C Charger",
      "price": 999,
      "discount": 20,
      "qty": 200,
      "artifact": "accessories",
      "rating": 4.2,
      "images": ["charger1.jpg"]
    }
  ]
}
```

Note: the real response includes the full array exported from `db/products.js`.

---

## 3) POST /create-account

- HTTP Method: POST
- URL: `http://localhost:3030/create-account`
- Headers: `Content-Type: application/json`

Sample Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "9876543210",
  "password": "StrongPassword123"
}
```

Sample Response (200):

```json
{
  "message": "Create Account",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "mobile": "9876543210",
    "password": "StrongPassword123"
  }
}
```

Behavior note: the current server implementation simply echoes back the posted JSON under `data` and returns the `Create Account` message.

---

## 4) POST /login

- HTTP Method: POST
- URL: `http://localhost:3030/login`
- Headers: `Content-Type: application/json`

Sample Request Body:

```json
{
  "email": "john@example.com",
  "password": "StrongPassword123"
}
```

Sample Response (200):

```json
{
  "message": "Login Success",
  "data": {
    "email": "john@example.com",
    "password": "StrongPassword123"
  }
}
```

Behavior note: the server echoes the received credentials under `data` with `Login Success` message; there is no authentication check implemented.

---

## How to use this in Postman

1. Open Postman and create a new Collection (e.g., "MIT Lecture - DAY-1 API").
2. Add requests matching the endpoints above. Set the base URL to `http://localhost:3030`.
3. For POST requests, set header `Content-Type: application/json` and paste the sample JSON into the body (raw → JSON).
4. Start the server with `node app.js` (or your dev runner) and send requests.

---

If you want, I can also export a Postman Collection JSON file you can import directly into Postman. Want me to generate that?
