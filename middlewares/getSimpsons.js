const { readSimpsons } = require('../tests/utils/readSimpsons');

const getSimpsonsMiddleware = async (req, res) => {
  const simpsons = await readSimpsons();
  return res.status(200).json({ simpsons });
};

module.exports = getSimpsonsMiddleware;