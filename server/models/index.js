const Game = require('../db');

module.exports.getGames = async () => {
  let result = await Game.find();
  return result;
};

module.exports.addGame = async (data) => {
  let newGame = new Game(data);
  await newGame.save();
};