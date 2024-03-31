const db = require("../db");

const getParticipantsByRaffleId = async (raffleId) => {
  const participants = await db.any(
    `
  SELECT *
  FROM participants
  JOIN raffles
  ON participants.raffle_id = raffles.id
  WHERE raffle_id = $1;
  `,
    [raffleId]
  );
  return participants;
};

module.exports = { getParticipantsByRaffleId };
