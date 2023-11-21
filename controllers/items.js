const Item = require("../models/item");

async function getAll(req, res) {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getByCategory(req, res) {
  try {
    let items = await Item.find({ category: req.params.id });
    res.send(items);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  getAll,
  getByCategory,
};
