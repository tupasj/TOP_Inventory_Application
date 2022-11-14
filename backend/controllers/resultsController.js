const clothingItemModelFile = require("../models/clothingItemModel");
const ClothingItem = clothingItemModelFile.clothingItemModel;

const getProductByName = async (req, res, productName, productType) => {
  const productNameRegex = new RegExp(productName, "i");

  try {
    let product;
    if (productType) {
      product = await ClothingItem.find({ name: productNameRegex });
    } else {
      product = await ClothingItem.find({ name: productNameRegex });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProductByName,
};