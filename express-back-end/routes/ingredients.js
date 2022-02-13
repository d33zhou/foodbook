const express = require("express");
const router = express.Router();

module.exports = (dbHelpers) => {
  // GET /api/ingredients/ filter to get all recipes with an ingredient
  router.get("/", function (req, res) {
    const { ingredient_name } = req.body;
    dbHelpers
      .getRecipesByIngredient(ingredient_name)
      .then((recipe) => res.json(recipe))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  //POST /api/ingredients create an ingredient
  router.post("/", function (req, res) {
    const { ingredient_name, amount, recipe_id } = req.body;

    dbHelpers
      .createIngredient(ingredient_name, amount, recipe_id)
      .then((ingredient) => {
        console.log(ingredient);
        return res.json(ingredient);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  //PUT /api/ingredients/
  router.put("/", function(req, res) {
    const { ingredient_name, amount, recipe_id } = req.body;

    dbHelpers
      .editIngredient(ingredient_name, amount, recipe_id)
      .then((ingredient) => {
        return res.json(ingredient);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  //DELETE api/ingredients/:id
  router.delete("/:id", (req,res) => {
    const { id } = req.params;
    dbHelpers.deleteIngredient(id).then(() => {
      res.send("Deleted!");
    })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
