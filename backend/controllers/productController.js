const clothingItemModelFile = require("../models/clothingItemModel");
const ClothingItem = clothingItemModelFile.clothingItemModel;

const getClothing = async (req, res) => {
    try {
        const allClothingItems = await ClothingItem.find();
        res.status(200).json(allClothingItems);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getClothing
}
