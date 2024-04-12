const express = require("express");
const cors = require("cors");

const app = express();

const rafflesController = require("./controllers/rafflesController");

app.use(cors());
app.use(express.json());

app.use("/api/raffles", rafflesController);

app.get("/", (req, res) => {
  res.status(200).json({ data: "Server is running!" });
});

module.exports = app;