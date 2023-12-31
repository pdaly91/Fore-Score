const model = require('../models');

module.exports.getGames = async (req, res) => {
  try {
    let result = await model.getGames();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

module.exports.postGames = async (req, res) => {
  try {
    await model.addGame(req.body);
    res.status(201).send();
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

module.exports.getClubs = async (req, res) => {
  try {
    let result = await model.getClubs();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

module.exports.postClubs = async (req, res) => {
  try {
    await model.addClub(req.body);
    res.status(201).send();
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

module.exports.putClubs = async (req, res) => {
  try {
    await model.updateClub(req.params.id, req.body);
    res.status(202).send();
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

module.exports.deleteClubs = async (req, res) => {
  try {
    await model.deleteClub(req.params.id);
    res.status(202).send();
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};