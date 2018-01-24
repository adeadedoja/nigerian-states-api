'use strict';

var express = require('express');

var router = express.Router();

// Router for homePage
router.get('/', function (req, res) {
  res.send('Welcome to the Nigerian States graphQl API. Click <a href="https://www.github.com/akinmaurice/nigerian-states-api">here</a> to continue');
});

module.exports = router;
//# sourceMappingURL=index.js.map