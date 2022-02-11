let express = require('express');
let router = express.Router();

/* GET /api/users/:id get a specific user profile. */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
