DROP TABLE IF EXISTS participants;
DROP TABLE IF EXISTS raffles;

CREATE TABLE raffles (
  id SERIAL PRIMARY KEY,
  name varchar(255) UNIQUE,
  secret_token varchar(255) UNIQUE,
  created_on TIMESTAMPTZ,
  raffled_on TIMESTAMPTZ,
  winner_id integer
);

CREATE TABLE participants (
  id SERIAL PRIMARY KEY,
  first_name varchar(255),
  last_name varchar(255),
  email varchar(255) UNIQUE,
  phone varchar(255),
  raffle_id integer REFERENCES raffles(id) ON DELETE CASCADE
);