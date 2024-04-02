const { getRaffleById } = require("../queries/rafflesQueries");

const validateId = (req, res, next) => {
  const { id } = req.params;
  const regex = /^[1-9]\d*$/;
  if (!regex.test(id)) {
    return res
      .status(400)
      .json({ error: `Id param must be positive integer! Received ${id}` });
  }
  req.id = Number(id);
  next();
};

const RAFFLE_FIELDS = ["name", "secret_token"];

const validateRaffle = (req, res, next) => {
  const raffle = req.body;

  for (const field of RAFFLE_FIELDS) {
    if (!raffle.hasOwnProperty(field)) {
      return res.status(400).json({
        error: `Field '${field}' is missing`,
      });
    }
    if (typeof raffle[field] !== "string") {
      return res.status(400).json({
        error: `Field '${field}' must be a string, received: a ${typeof raffle[
          field
        ]}, ${raffle[field]}`,
      });
    }
  }

  for (const field in raffle) {
    if (!RAFFLE_FIELDS.includes(field)) {
      return res
        .status(400)
        .json({ error: `${field} field not allowed for raffle` });
    }
  }
  next();
};

const validateRaffleExists = async (req, res, next) => {
  const { id } = req;
  const raffle = await getRaffleById(id);
  if (!raffle) {
    return res
      .status(404)
      .json({ error: `Could not find raffle with id: ${id}!` });
  }
  req.raffle = raffle;
  next();
};

const PARTICIPANT_FIELDS = ["first_name", "last_name", "email"];

const validateParticipant = (req, res, next) => {
  const participant = req.body;

  for (const field of PARTICIPANT_FIELDS) {
    if (!participant.hasOwnProperty(field)) {
      return res.status(400).json({
        error: `Field '${field}' is missing`,
      });
    }
    if (typeof participant[field] !== "string") {
      return res.status(400).json({
        error: `Field '${field}' must be a string, received: a ${typeof participant[
          field
        ]}, ${participant[field]}`,
      });
    }
  }

  for (const field in participant) {
    if (!PARTICIPANT_FIELDS.includes(field) && field !== "phone") {
      return res
        .status(400)
        .json({ error: `${field} field not allowed for participant` });
    }
  }
  next();
};

module.exports = {
  validateId,
  validateRaffle,
  validateRaffleExists,
  validateParticipant,
};
