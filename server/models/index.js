const { Game, Club} = require('../db');

module.exports.getGames = async () => {
  try {
    let result = await Game.find().sort({date: -1});
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.addGame = async (data) => {
  try {
    let newGame = new Game(data);
    await newGame.save();
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.getClubs = async () => {
  try {
    let result = await Club.find().sort({distance: -1});
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.addClub = async (data) => {
  try {
    let newClub = new Club(data);
    await newClub.save();
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.updateClub = async () => {
  try {

  } catch (err) {
    throw new Error(err);
  }
};

module.exports.deleteClub = async (id) => {
  try {
    await Club.findByIdAndDelete(id);
    return;
  } catch (err) {
    throw new Error(err);
  }
};