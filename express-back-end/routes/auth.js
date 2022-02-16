require("dotenv").config();

const express = require("express");
const router = express.Router();
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");

module.exports = (dbHelpers) => {

  /* POST /api/auth/register to register a new user */
  router.post("/register", function(req, res) {
    const { email, password, firstName, lastName, avatar } = req.body;
    dbHelpers.getUserByEmail(email)
      .then(user => {
        if (user) {
          res.json({
            msg: 'Sorry, a user account with this email already exists'
          });
        } else {
          return dbHelpers.addUser(firstName, lastName, email, password, avatar);
        }

      })
      .then((newUser) => res.json(newUser))
      .catch(err => res.json({
        error: err.message
      }));

  });
    
  /* POST /api/auth/login to login */
  router.post("/login", function(req, res) {
    // get the email and password entered from body
    const { email, password } = req.body;
  
    //if email or password was not entered
    if (!email || !password) {
      return res.status(400).send({ message: "Please enter email or password" });
    }
    
    dbHelpers.getUserByEmail(email)
      .then((user) => {
        if (user.password !== password) {
          return res.status(401).send("Invalid password.");
        }
        
        const payload = {
          id: user.id,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          avatar: user.avatar
        };

        // generate a token with payload
        const token = jwt.sign(payload, SECRET);

        return res.status(200).send({message:"Welcome!", token});

      })
      .catch((err) => res.json({ error: err.message }));
    
  });

  return router;
};

