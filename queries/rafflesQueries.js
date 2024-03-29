const db = require("../db")

const getAllRaffles = async () => {
  const raffles = await db.any('SELECT * FROM raffles;')
  return raffles;
}

module.exports = {getAllRaffles}