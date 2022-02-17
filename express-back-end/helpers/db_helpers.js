module.exports = (db) => {

  //-----------> User helpers <--------------
  // gets the user profile details, excluding password
  const getUserById = (id) => {
    const query = {
      text: 'SELECT id, first_name, last_name, email, avatar FROM users WHERE id = $1',
      values: [id]
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  //registers user to the db
  const addUser = (firstName, lastName, email, password,avatar) => {
    const query = {
      text: `INSERT INTO users (first_name, last_name, email, password, avatar) VALUES ($1, $2, $3, $4,$5) RETURNING *` ,
      values: [firstName, lastName, email, password,avatar]
    };

    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  // helps in logging in user
  const getUserByEmail = email => {

    const query = {
      text: `SELECT * FROM users WHERE email = $1` ,
      values: [email]
    };

    return db
      .query(query)
      .then(result => {
        return result.rows[0];
      })
      .catch((err) => err);
  };

  // get name/avatar for all people a user follows
  const getFollowsByUser = (id) => {

    const query = {
      text: `SELECT friends.user_id_2 AS id, first_name, last_name, avatar
        FROM friends JOIN users ON friends.user_id_2 = users.id
        WHERE friends.user_id_1 = $1
        `,
      values: [id]
    };

    return db.query(query)
      .then(result => result.rows)
      .catch((err) => err.message);
  };

  // get name/avatar for all people following a user
  const getFollowersByUser = (id) => {

    const query = {
      text: `SELECT friends.user_id_1 AS id, first_name, last_name, avatar
        FROM friends JOIN users ON friends.user_id_1 = users.id
        WHERE friends.user_id_2 = $1
        `,
      values: [id]
    };

    return db.query(query)
      .then(result => result.rows)
      .catch((err) => err.message);
  };

  // get basic recipe details for all recipes created by a specific user
  const getRecipesByUser = (id) => {

    const query = {
      text: `SELECT id, title, image_link
        FROM recipes
        WHERE creator_id = $1
        `,
      values: [id]
    };

    return db.query(query)
      .then(result => result.rows)
      .catch((err) => err.message);
  };

  // get bookmarked recipe details for all recipes bookmarked by a specific user
  const getBookmarksByUser = (id) => {

    const query = {
      text: `SELECT recipes.id, title, image_link, creator_id, first_name, last_name
        FROM bookmarks
        JOIN recipes ON bookmarks.recipe_id = recipes.id
        JOIN users ON recipes.creator_id = users.id
        WHERE bookmarks.user_id = $1
        `,
      values: [id]
    };

    return db.query(query)
      .then(result => result.rows)
      .catch((err) => err.message);
  };

  //get users likes
  const getUserLikes = (user_id) => {
    const query = {
      text: `SELECT recipe_id FROM likes WHERE user_id = $1`,
      values: [user_id]
    };

    return db.query(query)
      .then(result => result.rows)
      .catch((err) => err.message);
  }
  //-------> Recipe helpers <------------
  //get all recipes in db
  const getAllRecipes = () => {

    const query = {
      text:`SELECT recipes.* FROM recipes`
    };

    return db.query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  // get recipe count in db
  const getRecipeCount = () => {

    const query = {
      text:`SELECT COUNT(*) FROM recipes`
    };

    return db.query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  //get all recipes by friends in db
  const getAllRecipesByFriends = (user_id) => {

    const query = {
      text:`SELECT * FROM recipes WHERE creator_id IN (SELECT users.id FROM friends JOIN users ON users.id = friends.user_id_1 WHERE friends.user_id_2 = $1 UNION SELECT users.id FROM friends JOIN users ON users.id = friends.user_id_2 WHERE friends.user_id_1 = $1)`,
      values: [user_id]
    };

    return db.query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  //get a specific recipe from db
  const getRecipeById = (id) => {

    const query = {
      text:`SELECT recipes.*, first_name, last_name, avatar
      FROM recipes
      JOIN users ON creator_id = users.id
      WHERE recipes.id = $1
      `,
      values: [id]
    };

    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  //get a specific recipe from db
  const getRecipeByTitle = (title) => {

    const query = {
      text:`SELECT title,id FROM recipes WHERE title ILIKE '%'||$1||'%' LIMIT 3`,
      values: [title]
    };

    
    return db.query(query)
      .then(result => result.rows)
      .catch(err => err);
  };


  // add a new recipe to the db
  const createRecipe = (title,
    image,
    directions,
    prepTime,
    servings,
    difficulty,
    cuisine,
    restrictions) => {
    const query = {
      text:`INSERT INTO recipes (title,instructions,prep_minutes,servings,image_link,difficulty,cuisine,dietary_restriction) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
      values: [title,
        directions,
        prepTime,
        servings,
        image,
        difficulty,
        cuisine,
        restrictions]
    };

    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  // edit a recipe in the db
  const editRecipe = (title,instructions,prep_minutes,servings,image_link,difficulty,cuisine,dietary_restriction) => {
    const query = {
      text:`UPDATE recipes SET instructions = $1,prep_minutes = $2,servings = $3,image_link = $4,difficulty = $5,cuisine = $6,dietary_restriction = $7 WHERE title = $8 RETURNING *`,
      values: [instructions,prep_minutes,servings,image_link,difficulty,cuisine,dietary_restriction, title]
    };

    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  //delete recipe in the db
  const deleteRecipe = (id) => {
    const query = {
      text:`DELETE FROM recipes WHERE id = $1`,
      values: [id]
    };

    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  //-------> Ingredients helpers <------------

  // get ingredients by recipe id
  const getIngredientsByRecipe = (recipe_id) => {
    const query = {
      text: `SELECT * FROM ingredients WHERE recipe_id = $1`,
      values:[recipe_id]
    };
    return db.query(query)
      .then(result => result.rows)
      .catch(err => err);
  };


  // get all recipes that have an ingredient
  const getRecipesByIngredient = (ingredient_name) => {
    const query = {
      text: `SELECT recipes.* , ingredients.ingredient_name, ingredients.amount FROM ingredients INNER JOIN recipes ON ingredients.recipe_id = recipes.id WHERE ingredients.ingredient_name = $1`,
      values:[ingredient_name]
    };
    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  //create ingredient in the db
  const createIngredient = (ingredientId, amount, recipeId) => {

    const query = {
      text:` INSERT INTO ingredients (ingredient_name,amount,recipe_id) VALUES ($1,$2,$3) RETURNING *`,
      values:[ingredientId, amount, recipeId]
    };
    
    return db.query(query)
      .then(result => {
        return result.rows[0];
      })
      .catch(err => err);

  };

  // edit an ingredient in the db
  const editIngredient = (ingredient_name,amount,recipe_id) => {
    const query = {
      text:`UPDATE ingredients SET ingredient_name = $1,amount = $2 WHERE recipe_id = $3 RETURNING *`,
      values: [ingredient_name,amount,recipe_id]
    };

    return db.query(query)
      .then(result => {
        return result.rows[0];
      })
      .catch(err => err);
  };

  //delete ingredient in the db
  const deleteIngredient = (id) => {
    const query = {
      text:`DELETE FROM ingredients WHERE id = $1`,
      values: [id]
    };

    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  //-------> Likes helpers <------------

  // like a recipe
  const addLike = (user_id,recipe_id) => {
    const query = {
      text:`INSERT INTO likes (user_id,recipe_id) VALUES ($1,$2)`,
      values: [user_id,recipe_id]
    };
    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);

  };

  //unlike a recipe
  const removeLike = (user_id,recipe_id) => {
    const query = {
      text:`DELETE FROM likes WHERE user_id = $1 AND recipe_id = $2`,
      values: [user_id,recipe_id]
    };
    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);

  };

  //-------> Bookmark helpers <------------

  // bookmark a recipe
  const addBookmark = (user_id,recipe_id) => {
    const query = {
      text:`INSERT INTO bookmarks (user_id,recipe_id) VALUES ($1,$2)`,
      values: [user_id,recipe_id]
    };
    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);

  };

  //delete recipe bookmark
  const removeBookmark = (user_id,recipe_id) => {
    const query = {
      text:`DELETE FROM bookmarks WHERE user_id = $1 AND recipe_id = $2`,
      values: [user_id,recipe_id]
    };
    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);

  };

  // ----------> Friends helpers <--------------

  // add a friend
  const addFriend = (user_id_1, user_id_2) => {
    const query = {
      text:`INSERT INTO friends(user_id_1,user_id_2) VALUES ($1,$2)`,
      values: [user_id_1, user_id_2]
    };

    return db.query(query)
      .then(result => console.log(result))
      .catch(err => err);

  };

  // remove a friend
  const removeFriend = (user_id_1, user_id_2) => {
    const query = {
      text:`DELETE FROM friends WHERE user_id_1 = $1 AND user_id_2 = $2`,
      values: [user_id_1, user_id_2]
    };

    return db.query(query)
      .then(result => console.log(result))
      .catch(err => err);

  };


  return {
    getUserById,
    getUserByEmail,
    addUser,
    getUserLikes,
    getAllRecipes,
    getRecipeCount,
    getAllRecipesByFriends,
    getRecipeById,
    getRecipeByTitle,
    createRecipe,
    editRecipe,
    deleteRecipe,
    getRecipesByIngredient,
    getIngredientsByRecipe,
    createIngredient,
    editIngredient,
    deleteIngredient,
    addLike,
    removeLike,
    addBookmark,
    removeBookmark,
    addFriend,
    removeFriend,
    getFollowsByUser,
    getFollowersByUser,
    getRecipesByUser,
    getBookmarksByUser,
  };
};