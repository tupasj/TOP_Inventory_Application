const express = require('express');
const router = express.Router();
const {
  getClothing,
  getFilteredClothes,
} = require('../controllers/productController');

router.route('/').get((req, res) => {
  getClothing(req, res, null);
});
router.route('/filter?').get(getFilteredClothes);
router.route('/:type').get((req, res) => {
  getClothing(req, res, req.params.type);
});

module.exports = router;
