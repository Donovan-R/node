// const CustomError = require('../errors/custom-error.js');
const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
  let customError = {
    // valeurs par défaut
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg:
      err.message ||
      "Quelque chose s'est mal passé, veuillez réessayer plus tard",
  };

  res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandler;
