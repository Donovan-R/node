require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const fileUpload = require('express-fileupload');

//* cloudinary
//! utiliser v2

const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

//* routers

const productRouter = require('./routes/productRoutes.js');

const notFound = require('./middleware/notFound.js');
const errorHandler = require('./middleware/error-handler.js');

app.use(express.static('./public'));

app.use(express.json());
//ici nous avons besoin de la librairie fileupload
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.get('/', (req, res) => {
  res.send('<h1>uploader les fichiers</h1>');
});

//* routes

app.use('/api/v1/products', productRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log('Le serveur écoute sur le port 5000...');
});
