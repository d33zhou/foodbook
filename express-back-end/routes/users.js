let express = require("express");
let router = express.Router();

module.exports = (dbhelpers) =>{
  
  /* GET /api/users/:id/follows -- get followed users data for a specific user */
  router.get("/:id/follows", function(req, res) {
    const { id } = req.params;

    dbhelpers.getFollowsByUser(id)
      .then(follows => {
        res.json(follows);
      })
      .catch(err => res.json({
        error: err.message
      }));
  });

  /* GET /api/users/:id/recipes -- get recipes created by a specific user */
  router.get("/:id/recipes", function(req, res) {
    const { id } = req.params;

    dbhelpers.getRecipesByUser(id)
      .then(recipes => {
        res.json(recipes);
      })
      .catch(err => res.json({
        error: err.message
      }));
  });

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

