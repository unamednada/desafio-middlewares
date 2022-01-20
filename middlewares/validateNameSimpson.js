const validateNameSimpson = (req, res, next) => {
  const { name } = req.body;

  if (!name || name.length === 0) {
    return res.status(500).json({ message: 'Nome é obrigatório' });
  }

  next();
};

module.exports = validateNameSimpson;
