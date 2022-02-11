DROP TABLE IF EXISTS recipes CASCADE;

CREATE TABLE recipes(
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  instructions TEXT NOT NULL,
  prep_minutes NUMERIC NOT NULL,
  servings INTEGER NOT NULL,
  
  creator_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  cuisine_id INTEGER REFERENCES cuisines(id) ON DELETE CASCADE,
  difficulty_id INTEGER REFERENCES difficulties(id) ON DELETE CASCADE,
  restriction_id INTEGER REFERENCES restrictions(id) ON DELETE CASCADE
);