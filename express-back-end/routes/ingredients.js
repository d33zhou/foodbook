const express = require("express");
const router = express.Router();

module.exports = (dbHelpers) => {
  // GET /api/ingredients/  to get ingredients by recipe id
  router.get("/:id", function(req, res) {
    const { id } = req.params;
    dbHelpers
      .getIngredientsByRecipe(id)
      .then((ingredients) => res.json(ingredients))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  
  
  // POST /api/ingredients/filter filter to get all recipes with an ingredient
  router.post("/filter", function(req, res) {
    const { ingredient_name } = req.body;
    console.log(ingredient_name);
    dbHelpers
      .getRecipesByIngredient(ingredient_name)
      .then((recipe) => {
        console.log(recipe);
        return res.json(recipe);
      })
      .catch((err) =>{
        console.log(err.message);
        return res.json({
          error: err.message,
        });
      }
        
      );
  });

  //POST /api/ingredients create an ingredient
  router.post("/", function(req, res) {
    const { ingredientName, amount, recipeId } = req.body;

    dbHelpers
      .createIngredient(ingredientName, amount, recipeId)
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
