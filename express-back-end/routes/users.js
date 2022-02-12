let express = require("express");
let router = express.Router();

module.exports = (dbhelpers) =>{
  
  /* GET /api/users/:id get a specific user profile. */
  router.get("/:id", function(req, res) {
    const { id } = req.params;

    dbhelpers.getUserById(id)
      .then(user => {
        res.json(user);
      })
      .catch(err => res.json({
        error: err.message
      }));
  });
  return router;
};

