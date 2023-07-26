const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/forescore');

const gameSchema = new mongoose.Schema({
  course: String,
  date: { type: Date, default: Date.now },
  yards: Array,
  pars: Array,
  scores: Array
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;