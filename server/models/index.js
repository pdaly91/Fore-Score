const { Game, Club} = require('../db');

module.exports.getGames = async () => {
  let result = await Game.find().sort({date: -1});
  return result;
};

module.exports.addGame = async (data) => {
  let newGame = new Game(data);
  await newGame.save();
};

module.exports.getClubs = async () => {};

module.exports.addClub = async () => {};

module.exports.updateClub = async () => {};

module.exports.deleteClub = async () => {};