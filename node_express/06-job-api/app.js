require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const authenticatUser = require('./middleware/authentication.js');

const authRouter = require('./routes/auth.js');
const jobsRouter = require('./routes/jobs.js');

const notFound = require('./middleware/not-found.js');
const errorHandler = require('./middleware/error-handler.js');

app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticatUser, jobsRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log('le serveur écoute');
});
