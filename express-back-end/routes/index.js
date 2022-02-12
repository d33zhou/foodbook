const express = require('express');
const router = express.Router();


/* GET / homepage/landing page with the login */
router.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

/* GET /login/:id when user clicks login */
router.get('/login/:id', (req, res) => {
  console.log(req.session);
  // assign cookie credentials
  req.session['user_id'] = req.params.id;

  // redirect to homepage
  res
    .status(200)
    .redirect('/');
});

/* GET /logout when user clicks logout */
router.get('/logout', (req, res) => {
  // clear cookies
  req.session = null;

  // redirect to homepage
  res
    .status(200)
    .redirect('/');
});


module.exports = router;
