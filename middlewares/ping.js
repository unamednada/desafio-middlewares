const pingMiddleware = (req, res) => {
  return res.status(200).send('pong!');
};

module.exports = pingMiddleware;
