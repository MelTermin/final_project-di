CREATE DATABASE final_project2;

CREATE TABLE trackerList (
  id SERIAL PRIMARY KEY,
  exercise VARCHAR(200),
  repetition VARCHAR(200),
  weight VARCHAR(200),
  duration VARCHAR(200),
  date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE contactform (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(200),
  lastname VARCHAR(200),
  email VARCHAR(200),
  message VARCHAR(200)
);