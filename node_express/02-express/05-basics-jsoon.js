const express = require("express");
const app = express();
const { products } = require("./data");
console.log(products);

app.get("/", (req, res) => {
  res.status(200).json(products);
  res.end();
});

app.listen(5000, () => {
  console.log("écoute");
});
