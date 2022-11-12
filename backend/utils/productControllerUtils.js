const clothingItemModelFile = require("../models/clothingItemModel");
const ClothingItem = clothingItemModelFile.clothingItemModel;

const getClothingByType = async (req, res, clothingType) => {
    try {
        const clothing = await ClothingItem.find(clothingType);
        res.status(200).json(clothing);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
};

module.exports = {
  getClothingByType,
};
