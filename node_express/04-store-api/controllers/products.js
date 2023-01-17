const { ParameterStatusMessage } = require('pg-protocol/dist/messages');
const db = require('../db');

const getAllProductsStatic = async (req, res) => {
  const { rows } = await db.query(queryString, parameters);
  res.status(200).send({ product: rows, nbHits: getAllProducts.length });
};

const getAllProducts = async (req, res) => {
  const { name, sort, fields } = req.query;

  let queryString = 'select * from products';
  let parameters = [];

  if (fields) {
    queryString = `select ${fields} from products`;
  }

  if (name) {
    queryString += ' where name ilike $1';
    parameters.push(`%${name}`);
  }

  if (sort) {
    const sortList = sort
      .split(',')
      .map((field) =>
        field.startsWith('-') ? `${field.slice(1)} DESC :` : field
      )
      .join(',');
    queryString += ` ORDER by ${sortList}`;
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limmit) || 10;
  const offset = (page - 1) * limit;

  queryString += ` limit $${parameters.length + 1} OFFSET $${
    parameters.length + 2
  }`;
  parameters.push(limit, offset);
  console.log(queryString);

  const { rows } = await db.query(queryString, parameters);

  res.status(200).send({ product: rows, nbHits: getAllProducts.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
