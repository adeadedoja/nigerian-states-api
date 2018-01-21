const express = require('express');

const router = express.Router();

// Router for homePage
router.get('/', (req, res) => {
  res.send('Hello Home Page');
});


module.exports = router;
