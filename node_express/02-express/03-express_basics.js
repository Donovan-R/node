const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("utilisateur en contact");
  res.status(200).send("page accueil");
});

app.get("/about", (req, res) => {
  res.status(200).send(" page à propos");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>non trouvée</h1>");
});

app.listen(5000, () => {
  console.log("le serveur écoute");
});
