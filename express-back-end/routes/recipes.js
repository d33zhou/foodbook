const express = require("express");
const router = express.Router();

module.exports = (dbHelpers) => {
  /* GET /api/recipes get all recipes */
  router.get("/", function(req, res) {
    dbHelpers
      .getAllRecipes()
      .then((result) => res.json(result))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  // GET /api/recipes/:id get one recipe
  router.get("/:id", function(req, res) {
    const { id } = req.params;
    dbHelpers
      .getRecipeById(id)
      .then((recipe) => res.json(recipe))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  //POST /api/recipes create a recipe
  router.post("/", function(req, res) {
    const {
      title,
      instructions,
      prep_minutes,
      servings,
      image_link,
      difficulty,
      cuisine,
      dietary_restriction,
    } = req.body;
      

    dbHelpers
      .createRecipe(
        title,
        instructions,
        prep_minutes,
        servings,
        image_link,
        difficulty,
        cuisine,
        dietary_restriction
      )
      .then((recipe) => {
        return res.json(recipe);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  //PUT /api/recipes/:id
  router.put("/:id", function(req, res) {
    const {
      title,
      instructions,
      prep_minutes,
      servings,
      image_link,
      difficulty,
      cuisine,
      dietary_restriction
    } = req.body;
    
    const { id } = req.params;

    dbHelpers
      .editRecipe(
        id,
        title,
        instructions,
        prep_minutes,
        servings,
        image_link,
        difficulty,
        cuisine,
        dietary_restriction
      )
      .then((recipe) => {
        return res.json(recipe);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  //DELETE api/recipes/:id
  router.delete("/:id", (req,res) => {
    const { id } = req.params;
    dbHelpers.deleteRecipe(id).then(() => {
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
