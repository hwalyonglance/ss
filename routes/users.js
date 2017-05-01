var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('rwarm-tundra-98883');
});

module.exports = router;
