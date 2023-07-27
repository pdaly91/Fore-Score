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

app.get('/forescore/clubs', controller.getClubs);
app.post('/forescore/clubs', controller.postClubs);
app.put('/forescore/clubs/:id', controller.putClubs);
app.delete('/forescore/clubs/:id', controller.deleteClubs);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});