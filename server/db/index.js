const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/forescore');

const gameSchema = new mongoose.Schema({
  course: String,
  date: { type: Date, default: Date.now },
  yards: Array,
  pars: Array,
  scores: Array
});

const clubSchema = new mongoose.Schema({
  type: String,
  distance: Number
});

const Game = mongoose.model('Game', gameSchema);
const Club = mongoose.model('Club', clubSchema);

module.exports = {Game, Club};