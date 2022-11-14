const clothingItemModelFile = require("../models/clothingItemModel");
const { getQueryByType } = require("../utils/clothingUtils");
const ClothingItem = clothingItemModelFile.clothingItemModel;

const getProductSearchResults = async (req, res, searchValue, type) => {
  const searchValueRegex = new RegExp(searchValue, "i");
  try {
    let product;
    if (type) {
      let queryWithType = getQueryByType(type);
      queryWithType.name = searchValueRegex;
      product = await ClothingItem.find(queryWithType);
    } else {
      product = await ClothingItem.find({ name: searchValueRegex });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProductSearchResults,
};