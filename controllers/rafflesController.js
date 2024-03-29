const express = require("express");
const router = express.Router();

const { getAllRaffles, getRaffleById } = require("../queries/rafflesQueries");

const validateId = require("../middleware/index");

router.get("/", async (req, res) => {
  try {
    const raffles = await getAllRaffles();
    res.status(200).json({ data: raffles });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", validateId, async (req, res) => {
  try {
    const { id } = req.params;
    const raffle = await getRaffleById(Number(id));

    if (raffle) {
      res.status(200).json({ data: raffle });
    } else {
      return res
        .status(404)
        .json({ error: `Could not find raffle with id: ${id}!` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
