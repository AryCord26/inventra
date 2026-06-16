require('dotenv').config();

const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const errorMiddleware =
  require('./middlewares/errorMiddleware');

const notFoundMiddleware =
  require('./middlewares/notFoundMiddleware');

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  return res.json({
    success: true,
    application: 'Inventra API',
    version: '1.0.0'
  });
});

app.use('/api', routes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

module.exports = app;
