# Create Account API Documentation

---

## Description

This API endpoint is used to create a new user account by providing basic user details such as name, email, mobile number, and password.

---

---

## Headers

| Key          | Value            | Required |
| ------------ | ---------------- | -------- |
| Content-Type | application/json | Yes      |

---

## Request Body

**Body Type:** JSON

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "9876543210",
  "password": "StrongPassword123"
}

## HTTP Method
POST
## Endpoint
```
