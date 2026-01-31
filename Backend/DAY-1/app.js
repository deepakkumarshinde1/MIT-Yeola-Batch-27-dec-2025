// create a server
import express from "express";
import products from "./db/products.js";
let app = express();

app.use(express.json());
// all get request
app.get("/welcome", (request, response) => {
  response.json({
    message: "Welcome to node / express js",
  });
});

app.get("/products", (request, response) => {
  response.json({
    message: "Product List",
    products: products,
  });
});
// all post request
app.post("/create-account", (request, response) => {
  let data = request.body;
  response.json({
    message: "Create Account",
    data: data,
  });
});

app.post("/login", (request, response) => {
  let data = request.body;
  response.json({
    message: "Login Success",
    data: data,
  });
});

// listener
app.listen(3030, function () {
  console.log("Server started on port 3030");
});
