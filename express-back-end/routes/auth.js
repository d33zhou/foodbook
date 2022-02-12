const express = require("express");
const router = express.Router();
const { getUserByEmail } = require("../helpers/dataHelpers");
const jwt = require("jsonwebtoken");

/* POST /api/auth/register get all recipes */
router.post("/register", function (req, res) {
  const { email, password, firstName, lastName } = req.body;
});

/* POST /api/auth/login get all recipes */
router.post("/login", function (req, res) {
  // get the email and password entered from body
  const { email, password } = req.body;

  //if email or password was not entered
  if (!email || !password) {
    return res.status(400).send({ message: "Please enter email or password" });
  }

  const user = getUserByEmail(email)
    .then((user) => {
      return user;
    })
    .catch((err) => res.json({ error: err.message }));

  const payload = {
    userID: user.id,
    email: user.email,
  };

  //generate a token with payload
  const token = jwt.sign(payload);

  return res.status(200).send(token);
});

module.exports = router;
