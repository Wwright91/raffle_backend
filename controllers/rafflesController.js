const express = require("express");
const router = express.Router();

const { getAllRaffles, createRaffle } = require("../queries/rafflesQueries");

const {
  getParticipantsByRaffleId,
  signUpParticipant,
} = require("../queries/participantsQueries");

const {
  validateId,
  validateRaffle,
  validateRaffleExists,
  validateParticipant,
} = require("../middleware/index");

router.get("/", async (req, res) => {
  try {
    const raffles = await getAllRaffles();
    res.status(200).json({ data: raffles });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", validateId, validateRaffleExists, async (req, res) => {
  try {
    const { raffle } = req;
    res.status(200).json({ data: raffle });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", validateRaffle, async (req, res) => {
  try {
    const createdRaffle = await createRaffle(req.body);
    res.status(201).json({ data: createdRaffle });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get(
  "/:id/participants",
  validateId,
  validateRaffleExists,
  async (req, res) => {
    try {
      const { id } = req;
      const participants = await getParticipantsByRaffleId(id);
      res.status(200).json({ data: participants });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

router.post(
  "/:id/participants",
  validateId,
  validateRaffleExists,
  validateParticipant,
  async (req, res) => {
    try {
      const { id } = req;
      const newParticipant = await signUpParticipant(req.body, id);
      res.status(201).json({ data: newParticipant });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

module.exports = router;
