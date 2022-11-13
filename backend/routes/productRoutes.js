const express = require("express");
const router = express.Router();
const {
  getClothing,
  getMensClothing,
  getWomensClothing,
  getBrandNewClothing,
  getOnSaleClothing,
} = require("../controllers/productController");

router.route("/").get(getClothing);
router.route("/men").get(getMensClothing);
router.route("/women").get(getWomensClothing);
router.route("/brand-new").get(getBrandNewClothing);
router.route("/on-sale").get(getOnSaleClothing);

module.exports = router;
