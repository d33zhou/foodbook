const express = require('express');
const router = express.Router();
const app = express();
const cookieSession = require('cookie-session');

app.use(cookieSession({
  name: "session",
  keys: ['key1', 'key2'],
}));

/* GET / homepage/landing page with the login */
router.get('/', (req, res) => {
  res.status(200);
});

/* GET /login/:id when user clicks login */
router.get('/login/:id', (req, res) => {

  // assign cookie credentials
  req.session.userId = req.params.id;

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
