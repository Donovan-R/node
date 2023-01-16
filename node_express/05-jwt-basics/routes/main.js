const express = require('express');
const router = express.Router();

const { dashboard, login } = require('../controllers/main.js');
const authentificationMiddleware = require('../middleware/auth.js');

router.route('/login').post(login);

router.route('/dashboard').get(authentificationMiddleware, dashboard);

module.exports = router;
