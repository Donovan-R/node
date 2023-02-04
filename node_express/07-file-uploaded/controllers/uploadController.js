const { BadRequestError } = require('../errors');
const path = require('path');
const { StatusCodes } = require('http-status-codes');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const uploadProductImageLocal = async (req, res) => {
  if (!req.files) {
    throw new BadRequestError('pas de fichier uploadé');
  }
  const productImage = req.files.image;

  //* nous vérifions le format
  if (!productImage.mimetype.startsWith('image')) {
    throw new BadRequestError('veuillez charger un fichier image');
  }

  //* nous vérifions la size de l'image

  const maxSize = 1024 * 1024; //10 Mb
  if (productImage.size > maxSize) {
    throw new BadRequestError('veuillez charger une image inférieure à 10 Mb');
  }

  //*stocker l'image où l'on veut mais doit être accessible publiquement, express.static()

  // console.log(__dirname); //affiche le répertoire courant

  const imagePath = path.join(
    __dirname,
    '../public/uploads/' + `${productImage.name}`
  );

  //* déplace l'image
  await productImage.mv(imagePath);

  res
    .status(StatusCodes.OK)
    .json({ image: { src: `./uploads/${productImage.name}` } });
};

const uploadProductImage = async (req, res) => {
  //* utilisation d'un hébergeur d'image
  if (!req.files) {
    throw new BadRequestError('pas de fichier uploadé');
  }
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'file-upload',
    }
  );

  //* suppression du fichier temp
  fs.unlinkSync(req.files.image.tempFilePath);

  //* récupération
  res.status(StatusCodes.OK).json({
    image: {
      src: result.secure_url,
    },
  });
};

module.exports = uploadProductImage;
