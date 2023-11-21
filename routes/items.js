const express = require("express");
const router = express.Router();
const itemsCtrl = require("../controllers/items");

router.get("/getAll", itemsCtrl.getAll);

router.get("/getCategory/:id", itemsCtrl.getByCategory);

module.exports = router;
