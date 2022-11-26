const ClothingItem = require("../models/clothingItemModel");
const { getClothingByType, getQueryByType } = require("../utils/clothingUtils");

const getClothing = async (req, res, type) => {
  if (type) {
    const query = getQueryByType(type);
    getClothingByType(req, res, query);
  } else {
    getClothingByType(req, res);
  }
};

const getFilteredClothes = async (req, res) => {
  // In req.query object, turn price: value into price: {$lte: value}
  for (let property in req.query) {
    if (property == "price") {
      req.query[property] = { $lte: req.query[property] };
    }
  }

  try {
    const filteredClothes = await ClothingItem.find(req.query);
    res.status(200).json(filteredClothes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getClothing,
  getFilteredClothes,
};