'use strict';

var _graphql = require('./graphql');

var _graphql2 = _interopRequireDefault(_graphql);

var _http = require('http');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var graphqlHTTP = require('express-graphql');
var logger = require('morgan');
var cors = require('cors');

var routes = require('./routes/index');

// GraphQL Schema


var app = express();

app.use(cors());
app.use(logger('dev'));

// Handle our routes!
app.use('/', routes);

// Graph QL endpoint
app.use('/graphql', graphqlHTTP(function () {
  return {
    schema: _graphql2.default,
    graphiql: true,
    pretty: true
  };
}));

// Error Handlers
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ status: 401, error: 'Invalid Endpoint' });
});

// done! we export it so we can start the site in start.js
module.exports = app;
//# sourceMappingURL=app.js.map