let express = require('express');
let router = express.Router();

/* GET / get all recipes */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;