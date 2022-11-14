const express = require("express");
const router = express.Router();
const { getClothing } = require("../controllers/productController");

router.route("/").get(getClothing);
router.route("/:type").get((req, res) => {
  getClothing(req, res, req.params.type);
});

module.exports = router;
