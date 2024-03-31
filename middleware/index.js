const validateId = (req, res, next) => {
  const { id } = req.params;
  const regex = /^[1-9]\d*$/;
  if (!regex.test(id)) {
    return res
      .status(400)
      .json({ error: `Id param must be positive integer! Received ${id}` });
  }
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

module.exports = { validateId, validateRaffle };
