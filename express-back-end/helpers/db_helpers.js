module.exports = (db) => {

  // gets the user profile details
  const getUserById = (id) => {
    const query = {
      text: 'SELECT * FROM users WHERE id = $1',
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

  //get all recipes in db
  const getAllRecipes = () => {

    const query = {
      text:`SELECT * FROM recipes`
    };

    return db.query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  //get all recipes in db
  const getRecipeById = (id) => {

    const query = {
      text:`SELECT * FROM recipes WHERE id = $1`,
      values: [id]
    };

    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  const createRecipe = (title,instructions,prep_minutes,servings,image_link,difficulty,cuisine,dietary_restriction) => {
    const query = {
      text:`INSERT INTO recipes (title,instructions,prep_minutes,servings,image_link,difficulty,cuisine,dietary_restriction) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
      values: [title,instructions,prep_minutes,servings,image_link,difficulty,cuisine,dietary_restriction]
    };

    return db.query(query)
      .then(result => result.rows[0])
      .catch(err => err);
  };

  return {
    getUserById,
    getUserByEmail,
    addUser,
    getAllRecipes,
    getRecipeById,
    createRecipe
  };
};