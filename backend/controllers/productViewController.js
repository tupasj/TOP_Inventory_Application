const clothingItemModelFile = require("../models/clothingItemModel");
const ClothingItem = clothingItemModelFile.clothingItemModel;

const getProductByID = async (req, res, productID) => {
  try {
    const product = await ClothingItem.findById(productID);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProductByID,
};
