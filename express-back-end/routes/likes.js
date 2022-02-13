let express = require("express");
let router = express.Router();

module.exports = (dbhelpers) =>{
  
  /* POST /api/like to like a recipe */
  router.post("/like", function(req, res) {
    const { user_id, recipe_id } = req.body;

    dbhelpers.addLike(user_id, recipe_id)
      .then(() => {
        res.send("Liked!");
      })
      .catch(err => res.json({
        error: err.message
      }));
  });

  /* POST /api/unlike to like a recipe */
  router.post("/unlike", function(req, res) {
    const { user_id, recipe_id } = req.body;

    dbhelpers.removeLike(user_id, recipe_id)
      .then(() => {
        res.send("Un-Liked!");
      })
      .catch(err => res.json({
        error: err.message
      }));
  });
  return router;
};