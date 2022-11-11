const express = require("express");
const router = express.Router();
const { getClothing } = require("../controllers/productController");

router.route("/").get(getClothing);

module.exports = router;
