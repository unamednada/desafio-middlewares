const express = require('express');
const bodyParser = require('body-parser');
const pingMiddleware = require('./middlewares/ping');
const helloMiddleware = require('./middlewares/hello');
const greetingMiddleware = require('./middlewares/greeting');
const getSimpsonsMiddleware = require('./middlewares/getSimpsons');
const getSimpsonByIdMiddleware = require('./middlewares/getSimpsonById');
const createSimpsonMiddleware = require('./middlewares/createSimpson');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/ping', pingMiddleware);
app.post('/hello', helloMiddleware);
app.post('/greeting', greetingMiddleware);

app.get('/simpson/:id', getSimpsonByIdMiddleware);
app.get('/simpsons', getSimpsonsMiddleware);

app.post('/simpsons', createSimpsonMiddleware);

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`)});
