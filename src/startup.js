// load .env file
require('dotenv-flow').config();

// init express
const express = require('express');
const morgan = require('morgan');

const app = express();

// express options
const envType = process.env.NODE_ENV || 'development';
const isDevelopment = (envType === 'development');

if (isDevelopment) {
  app.set('json spaces', 4);
}
app.set('x-powered-by', false);

// init express middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

// init express router
const routerModule = require('express').Router; // express.Router
const routes = require('./routes');

const router = routerModule();

routes(router, app);

// enable routing definitons
app.use('/', router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');

  err.status = 404;

  next(err);
});

// error handlers
function fixErrorObjectResult(err) {
  const serialized = JSON.stringify(err, Object.getOwnPropertyNames(err));

  return JSON.parse(serialized);
}

app.use((err, req, res) => {
  const response = {
    message: err.message,
  };

  if (isDevelopment) {
    response.error = fixErrorObjectResult(err);
  }

  // render the error page
  res.status(err.status || 500);
  res.json(response);
});

module.exports = app;
