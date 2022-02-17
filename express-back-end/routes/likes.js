let express = require("express");
let router = express.Router();

module.exports = (dbhelpers) => {
  // GET /api/like to get the number of likes and the likes by user
  router.get("/like", function(req, res) {
    const { user_id } = req.query;
    console.log(user_id);
    dbhelpers
      .getUserLikes(user_id)
      .then((response) => res.json(response))
      .catch((err) => res.json(err.message));
  });

  /* POST /api/like to like a recipe */
  router.post("/like", function (req, res) {
    const { user_id, recipe_id } = req.body;

    dbhelpers
      .addLike(user_id, recipe_id)
      .then(() => {
        res.send("Liked!");
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  /* POST /api/unlike to like a recipe */
  router.post("/unlike", function (req, res) {
    const { user_id, recipe_id } = req.body;

    dbhelpers
      .removeLike(user_id, recipe_id)
      .then(() => {
        res.send("Un-Liked!");
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  return router;
};
