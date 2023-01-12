const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1> Page d'accueil </h1> <a href='/api/products'>Produits </a>");
});

app.get("/api/products", (req, res) => {
  const newproducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newproducts);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!singleProduct) {
    return res.status(404).send("inexistant");
  }
  res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.includes(search)
    );
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (!sortedProducts.length) {
    res.status(200).json({ success: true, data: sortedProducts });
  }
  res.json({ data: sortedProducts });
});

app.listen(5000, () => {
  console.log("écoute");
});
