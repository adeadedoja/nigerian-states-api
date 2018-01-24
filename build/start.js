'use strict';

var mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config();

// Connect to our Database and handle an bad connections
mongoose.connect(process.env.DATABASE, {
  useMongoClient: true
});
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', function (err) {
  console.error('\uD83D\uDE45 \uD83D\uDEAB \uD83D\uDE45 \uD83D\uDEAB \uD83D\uDE45 \uD83D\uDEAB \uD83D\uDE45 \uD83D\uDEAB \u2192 ' + err.message);
});

// Start our app!
var app = require('./app');

app.set('port', process.env.PORT || 5000);
var server = app.listen(app.get('port'), function () {
  console.log('Express running \u2192 PORT ' + server.address().port);
});
//# sourceMappingURL=start.js.map