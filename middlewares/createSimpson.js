const fs = require('fs').promises;
const { readSimpsons } = require('../tests/utils/readSimpsons');

const createSimpsonMiddleware = async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await readSimpsons();

  simpsons.push({ id, name });

  await fs.writeFile('./simpsons.json', JSON.stringify(simpsons));
  return res.status(201).json({ message: 'Simpson criado com sucesso!' });
};

module.exports = createSimpsonMiddleware;
