const express = require('express');
const bodyParser = require('body-parser');
const pingMiddleware = require('./middlewares/ping');

const app = express();
const PORT = 3000;

app.use('/ping', pingMiddleware);

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`)});
