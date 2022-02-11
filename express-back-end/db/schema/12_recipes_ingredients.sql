DROP TABLE IF EXISTS recipes_ingredients CASCADE;

CREATE TABLE recipes_ingredients(
  id SERIAL PRIMARY KEY NOT NULL,
  quantity NUMERIC NOT NULL,
  measurement VARCHAR(255) NOT NULL,
  
  recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
  ingredient_id INTEGER REFERENCES ingredients(id) ON DELETE CASCADE
);