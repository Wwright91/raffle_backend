const db = require("../db");

const getAllRaffles = async () => {
  const raffles = await db.any("SELECT * FROM raffles;");
  return raffles;
};

const getRaffleById = async (id) => {
  const raffle = await db.oneOrNone("SELECT * FROM raffles WHERE id = $1;", [
    id,
  ]);
  return raffle;
};

const createRaffle = async (raffle) => {
  let { name, secret_token, created_on, raffled_on, winner_id } = raffle;
  if (!created_on) {
    created_on = "now()";
  }
  const newRaffle = await db.oneOrNone(
    `
  INSERT INTO raffles (name, secret_token, created_on, raffled_on, winner_id)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;
  `,
    [name, secret_token, created_on, raffled_on, winner_id]
  );

  return newRaffle;
};

module.exports = { getAllRaffles, getRaffleById, createRaffle };
