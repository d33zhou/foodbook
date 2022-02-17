let express = require("express");
let router = express.Router();

module.exports = (dbhelpers) =>{
  
  // GET /api/bookmark to get the number of bookmarks and the bookmarks by user
  router.get("/bookmark", function(req, res) {
    const { user_id,recipe_id } = req.query;
    dbhelpers
      .getUserBookmarks(user_id,recipe_id)
      .then((response) => res.json(response))
      .catch((err) => res.json(err.message));
  });

  /* POST /api/bookmark to bookmark a recipe */
  router.post("/bookmark", function(req, res) {
    const { user_id, recipe_id } = req.body;

    dbhelpers.addBookmark(user_id, recipe_id)
      .then(result => {
        res.json(result);
      })
      .catch(err => res.json({
        error: err.message
      }));
  });

  /* POST /api/unbookmark to like a recipe */
  router.post("/unbookmark", function(req, res) {
    const { user_id, recipe_id } = req.body;

    dbhelpers.removeBookmark(user_id, recipe_id)
      .then(result => {
        res.json(result);
      })
      .catch(err => res.json({
        error: err.message
      }));
  });
  return router;
};