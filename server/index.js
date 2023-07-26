require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const controller = require('./controllers');

const app = express();
const port = process.env.SERVER_PORT;

app.use(morgan('dev'));
app.use(express.json());

app.get('/forescore/games', controller.getGames);

app.post('/forescore/games', controller.postGames);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});