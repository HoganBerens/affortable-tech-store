const Category = require("../models/category");

async function getAll(req, res) {
  try {
    let categories = await Category.find();
    res.send(categories);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  getAll,
};
