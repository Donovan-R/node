const express = require("express");
const app = express();

//* mise en place du middleware bien plus pratique
app.use(express.static("./public"));
//*ou
// res.sendFile(path.resolve(__dirname, './navbar-app/navbar-app/indes.html'))

app.get("/", (req, res) => {
  res.status(200).send("page accueil");
});

app.all("*", (req, res) => {
  res.status(404).send("non trouvée");
});

app.listen(5000, () => {
  console.log("écoute");
});
