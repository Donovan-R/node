const express = require("express");
const app = express();

const logger = require("./logger");
const authorize = require("./authorize");

app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("accueil");
});

app.get("/about", (req, res) => {
  res.send("à propos");
});
app.get("/api/products", (req, res) => {
  res.send("produits");
});
app.get("/api/items", (req, res) => {
  res.send("items");
});

app.listen(5000, () => {
  console.log("le serveur écoute");
});
