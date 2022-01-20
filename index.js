const express = require('express');
const bodyParser = require('body-parser');
const pingMiddleware = require('./middlewares/ping');
const helloMiddleware = require('./middlewares/hello');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/ping', pingMiddleware);
app.post('/hello', helloMiddleware);

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`)});
