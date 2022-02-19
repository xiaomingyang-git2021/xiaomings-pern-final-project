DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS books;

-- CREATE TABLE test (
--     id SERIAL PRIMARY KEY, 
--     name TEXT
-- );

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  image TEXT,
  author TEXT,
  description TEXT,
  price NUMERIC,
  rating NUMERIC,
  CHECK (rating >=0 AND rating <= 5),
  featured BOOLEAN
);
