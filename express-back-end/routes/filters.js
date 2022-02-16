let express = require("express");
let router = express.Router();

module.exports = (dbhelpers) =>{
  
  /* GET /api/filter to filter easy recipes */
  router.get("/difficulty", function(req, res) {
    const { difficulty } = req.query;
    
    console.log(req.body);
    dbhelpers.getRecipeByDifficulty(difficulty)
      .then((result) => {
        console.log(result);
        return res.json(result);
      })
      .catch(err => res.json({
        error: err.message
      }));
  });

  // /* POST /api/unbookmark to like a recipe */
  // router.post("/unbookmark", function(req, res) {
  //   const { user_id, recipe_id } = req.body;

  //   dbhelpers.removeBookmark(user_id, recipe_id)
  //     .then(() => {
  //       res.send("Un-Bookmarked!");
  //     })
  //     .catch(err => res.json({
  //       error: err.message
  //     }));
  // });
  return router;
};