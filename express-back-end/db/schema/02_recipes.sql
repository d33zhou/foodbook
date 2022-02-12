DROP TABLE IF EXISTS recipes CASCADE;

CREATE TABLE recipes(
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  instructions TEXT NOT NULL,
  prep_minutes NUMERIC NOT NULL,
  servings INTEGER NOT NULL,
  image_link TEXT NOT NULL,
  difficulty VARCHAR(255) CHECK (difficulty IN ('easy', 'moderate', 'challenging')) NOT NULL,
  cuisine VARCHAR(255) CHECK (cuisine IN (
    'american',
    'chinese',
    'japanese',
    'italian',
    'korean',
    'indian',
    'greek',
    'spanish',
    'mediterranean',
    'lebanese',
    'moroccan',
    'turkish',
    'thai'
  )) NOT NULL,
  dietary_restriction VARCHAR(255) CHECK (dietary_restriction IN (
    'vegetarian',
    'vegan',
    'kosher',
    'keto',
    'lactose-free',
    'low-carb'
  )),

  creator_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);