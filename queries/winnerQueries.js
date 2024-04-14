const db = require("../db");

const { getParticipantsByRaffleId } = require("./participantsQueries");

const pickWinnerByRaffleId = async (raffleId) => {
  const participants = await getParticipantsByRaffleId(raffleId);

  if (!participants.length) {
    throw new Error(
      `No participants found for the raffle with id: ${raffleId}`
    );
  }

  const winnerIndex = Math.floor(Math.random() * participants.length);
  const winner = participants[winnerIndex];
  const raffledOn = "now()";

  await db.none(
    `UPDATE raffles
       SET winner_id = $1, raffled_on = $2
       WHERE id = $3`,
    [winner.id, raffledOn, raffleId]
  );

  return winner;
};

const getWinnerByRaffleId = async (raffleId) => {
  const participants = await getParticipantsByRaffleId(raffleId);

  if (!participants.length) {
    throw new Error(
      `No participants found for the raffle with id: ${raffleId}`
    );
  }

  const winner = await db.oneOrNone(
    `
    SELECT *
    FROM raffles
    JOIN participants
    ON participants.raffle_id = raffles.id
    AND participants.id = raffles.winner_id
    WHERE raffle_id = $1;
    `,
    [raffleId]
  );

  return winner;
};

module.exports = { pickWinnerByRaffleId, getWinnerByRaffleId };
