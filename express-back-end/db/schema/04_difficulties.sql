DROP TABLE IF EXISTS difficulties CASCADE;

CREATE TABLE difficulties(
  id SERIAL PRIMARY KEY NOT NULL,
  difficulty_level VARCHAR(255) NOT NULL
);