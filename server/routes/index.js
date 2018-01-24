const express = require('express');

const router = express.Router();

// Router for homePage
router.get('/', (req, res) => {
  res.send('Welcome to the Nigerian States graphQl API. Click <a href="https://www.github.com/akinmaurice/nigerian-states-api">here</a> to continue');
});


module.exports = router;
