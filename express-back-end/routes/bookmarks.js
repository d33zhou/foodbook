let express = require("express");
let router = express.Router();

module.exports = (dbhelpers) =>{
  
  /* POST /api/like to like a recipe */
  router.post("/bookmark", function(req, res) {
    const { user_id, recipe_id } = req.body;

    dbhelpers.addBookmark(user_id, recipe_id)
      .then(() => {
        res.send("Bookmarked!");
      })
      .catch(err => res.json({
        error: err.message
      }));
  });

  /* POST /api/unbookmark to like a recipe */
  router.post("/unbookmark", function(req, res) {
    const { user_id, recipe_id } = req.body;

    dbhelpers.removeBookmark(user_id, recipe_id)
      .then(() => {
        res.send("Un-Bookmarked!");
      })
      .catch(err => res.json({
        error: err.message
      }));
  });
  return router;
};