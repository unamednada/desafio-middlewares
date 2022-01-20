const { readSimpsons } = require('../tests/utils/readSimpsons');

const validateIdSimpsonMiddleware = async (req, res, next) => {
  const { id } = req.body;
  const simpsons = await readSimpsons();

  const simpsonExists = simpsons.find(sim => sim.id === +id);
  if (simpsonExists) {
    return res.status(500).json({ message: 'Não é possível cadastrar esse simpson!' });
  }

  next();
};

module.exports = validateIdSimpsonMiddleware;
