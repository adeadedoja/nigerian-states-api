const express = require('express');
const graphqlHTTP = require('express-graphql');
const logger = require('morgan');
const cors = require('cors');

const routes = require('./routes/index');


// GraphQL Schema
import schema from './graphql';
import { request } from 'http';


const app = express();

app.use(cors());
app.use(logger('dev'));

// Handle our routes!
app.use('/', routes);

// Graph QL endpoint
app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true,
})));


// Error Handlers
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ status: 401, error: 'Invalid Endpoint' });
});

// done! we export it so we can start the site in start.js
module.exports = app;
