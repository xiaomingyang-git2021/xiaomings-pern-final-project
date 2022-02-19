-- DROP TABLE IF EXISTS test;

-- CREATE TABLE test (
--     id SERIAL PRIMARY KEY, 
--     name TEXT
-- );



DROP DATABASE IF EXISTS books_dev;
CREATE DATABASE books_dev;

\c books_dev;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  image TEXT,
  author TEXT,
  description TEXT,
  price NUMBER,
  is_favorite BOOLEAN
);