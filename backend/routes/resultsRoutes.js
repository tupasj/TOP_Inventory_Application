const express = require("express");
const router = express.Router();
const { getProductSearchResults } = require("../controllers/resultsController");

router.route("/search_query=:searchValue/:type?").get((req, res) => {
  const searchValue = req.params.searchValue;
  const type = req.params.type;
  getProductSearchResults(req, res, searchValue, type);
});

module.exports = router;
