const db = require("../db");

const getParticipantsByRaffleId = async (raffleId) => {
  const participants = await db.any(
    `
  SELECT *
  FROM raffles
  JOIN participants
  ON participants.raffle_id = raffles.id
  WHERE raffle_id = $1;
  `,
    [raffleId]
  );
  return participants;
};

const signUpParticipant = async (participant, raffleId) => {
  let { first_name, last_name, email, phone } = participant;
  const newParticipant = await db.oneOrNone(
    `
    INSERT INTO participants (first_name, last_name, email, phone, raffle_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `,
    [first_name, last_name, email, phone, raffleId]
  );

  return newParticipant;
};

module.exports = { getParticipantsByRaffleId, signUpParticipant };
