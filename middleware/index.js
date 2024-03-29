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

module.exports = validateId;
