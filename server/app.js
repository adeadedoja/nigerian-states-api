import fs from 'fs';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import morgan from 'morgan';
import FileStreamRotator from 'file-stream-rotator';
import cors from 'cors';

// Import the Logger Module
import loggerInit from './config/logger';
// Import the Route Module
import routes from './routes';

// GraphQL Schema
import schema from './graphql';

const logDirectory = './log';
const checkLogDir = fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const app = express();

// initialize logger and Stream
let accessLogStream;
let logger;

if (app.get('env') === 'development') {
  logger = loggerInit('development');
} else if (app.get('env') === 'production') {
  logger = loggerInit('production');
} else if (app.get('env') === 'test') {
  logger = loggerInit('test');
} else {
  logger = loggerInit();
}

global.logger = logger;
logger.info('States GraphQL Application Server starting...');
logger.debug("Overriding 'Express' logger");


if (checkLogDir) {
  accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: `${logDirectory}/StatesAPI-%DATE%.log`,
    frequency: 'weekly',
    verbose: false,
  });
}


app.use(cors());
app.use(morgan('combined', { stream: accessLogStream }));

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

  // add this line to include winston logging
  logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);


  // render the error page
  res.status(err.status || 500);
  res.json({ status: 401, error: 'Invalid Endpoint' });
});

// done! we export it so we can start the site in start.js
module.exports = app;
