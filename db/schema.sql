DROP TABLE IF EXISTS raffles;

CREATE TABLE raffles (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  secret_token varchar(255)
);