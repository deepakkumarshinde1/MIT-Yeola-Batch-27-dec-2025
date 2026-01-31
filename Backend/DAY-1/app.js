// create a server
import express from "express";
let app = express();

app.get("/welcome", (request, response) => {
  response.json({
    message: "Welcome to node / express js",
  });
});
// listener
app.listen(3030, function () {
  console.log("Server started on port 3030");
});
