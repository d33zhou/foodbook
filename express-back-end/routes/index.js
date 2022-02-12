const express = require('express');
const router = express.Router();


/* GET / homepage/landing page with the login */
router.get('/', (req, res) => {
  res.status(200);
});


module.exports = router;
