const express = require("express");
const router = express.Router();
const { getProductByID } = require("../controllers/productViewController");

router.route("/:productID").get((req, res) => {
    getProductByID(req, res, req.params.productID);
});

module.exports = router;