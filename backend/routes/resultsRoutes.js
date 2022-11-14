const express = require("express");
const router = express.Router();
const { getProductByName } = require("../controllers/resultsController");

router.route("/search_query=:searchQuery&:type").get((req, res) => {
  getProductByName(req, res, req.params.searchQuery);
});

module.exports = router;
