const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors');

const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError('introduire id et mdp');
  }

  const id = new Date().getTime();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(200).send({ msg: 'utilisateur créé', token });
};

const dashboard = (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `hello ${req.user.username}`,
    secret: `votre num est : ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
