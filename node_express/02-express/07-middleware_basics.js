//* middleware - fction qui s'exécute pendant une requête au serveur
//* accès aux objets request et response
const express = require("express");
const app = express();

const logger = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get("/", logger, (req, res) => {
  res.send("accueil");
});

app.get("/about", logger, (req, res) => {
  res.send("à propos");
});
app.listen(5000, () => {
  console.log("le serveur écoute");
});
