DROP TABLE IF EXISTS raffles;

CREATE TABLE raffles (
  id SERIAL PRIMARY KEY,
  name varchar(255) UNIQUE,
  secret_token varchar(255) UNIQUE,
  created_on TIMESTAMPTZ,
  raffled_on TIMESTAMPTZ,
  winner_id integer
);