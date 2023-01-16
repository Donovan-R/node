const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors/custom-error.js');
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
};

module.exports = errorHandler;
