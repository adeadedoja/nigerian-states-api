const express = require('express');

const router = express.Router();

// Router for homePage
router.get('/', (req, res) => {
  logger.info('App Index Route Accessed!');
  res.json({
    status: 200,
    message: 'Welcome to the Nigerian States graphQl API',
    redirectUrl: 'https://www.github.com/akinmaurice/nigerian-states-api',
  });
});


export default router;
