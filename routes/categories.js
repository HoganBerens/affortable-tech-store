const express = require("express");
const router = express.Router();
const categoriesCtrl = require("../controllers/categories");

router.get("/getAll", categoriesCtrl.getAll);

module.exports = router;
