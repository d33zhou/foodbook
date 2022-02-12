const express = require('express');
const router = express.Router();

module.exports = (dbHelpers) => {
  
  /* GET /api/recipes get all recipes */
  router.get('/', function(req, res) {
    dbHelpers.getAllRecipes()
      .then((result) => res.json(result))
      .catch(err => res.json({
        error: err.message
      }));
  });

  // GET /api/recipes/:id get one recipe
  router.get('/:id', function(req,res) {

    const { id } = req.params;
    dbHelpers.getRecipeById(id)
      .then(recipe => res.json(recipe))
      .catch(err => res.json({
        error: err.message
      }));
  });

  //POST /api/recipes create a recipe
  // router.post('/', function(req,res) {
  //   const {title,instructions,prep_minutes,servings,image_link,difficulty,cuisine,dietary_restriction} = req.body;
      
  //   dbHelpers.createRecipe();
  // });

  return router;
};
