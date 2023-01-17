require("dotenv").config();
require("express-async-errors");

console.log(process.env);

const express = require("express");
const app = express();

const errorHandlerMiddleware = require("./middleware/error-handler.js");
const notFound = require("./middleware/not-found.js");

const products = require("./routes/products.js");

app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1><a href="/api/v1/products">products route </a>`);
});

app.use("/api/v1/products", products);

app.use(notFound);
app.use(errorHandlerMiddleware);

app.listen(5000, () => {
  console.log("le serveur écoute");
});
