CREATE DATABASE first_pern;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(30),
    password VARCHAR(30)
);
