const { readSimpsons } = require('../tests/utils/readSimpsons');

const getSimpsonByIdMiddleware = async (req, res) => {
  const { id } = req.params;
  const simpsons = await readSimpsons();

  const simpson = simpsons.find(sim => sim.id === +id);
  if (!simpson) {
    return res.status(404).json({ message: 'Simpson not found!' });
  }
  return res.status(200).json(simpson);

};

module.exports = getSimpsonByIdMiddleware;
