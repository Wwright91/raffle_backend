const express = require("express")
const router = express.Router()

const {getAllRaffles} = require("../queries/rafflesQueries")

router.get("/", async (req, res) => {
  try {
    const raffles = await getAllRaffles()
    res.status(200).json({data: raffles})
  } catch (err) {
    res.status(500).json({error: err.message})
}
})

module.exports = router