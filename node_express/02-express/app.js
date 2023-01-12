const express = require("express");
const app = express();

app.use(express.static("./methods-public/methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const people = require("./routes/people");
app.use("/api/people", people);

//*post
app.post("/login", (req, res) => {
  const { name } = req.body;

  if (name) {
    res.status(200).send(`bienvenue ${name}`);
  } else {
    res.status(401).send("veuillez donner un nom");
  }
});

app.listen(5000, () => {
  console.log("le serveur écoute");
});
