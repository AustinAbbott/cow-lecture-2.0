CREATE DATABASE cows;

\connect cows;

CREATE TABLE cow(
    cow_id SERIAL,
    cow_name TEXT,
    cow_description TEXT
);