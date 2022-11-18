const ClothingItem = require("../models/clothingItemModel");

const addCartItem = async (req, res, userID) => {
  const clothingItem = new ClothingItem({
    alt: req.alt,
    brandNew: req.brandNew,
    category: req.category,
    gender: req.gender,
    name: req.name,
    price: req.price,
    rating: req.rating,
    salePrice: req.salePrice,
    src: req.src,
    style: req.style,
    quantity: req.number,
  });

  try {
    // Save newClothingItem to user's cart
    const newClothingItem = await clothingItem.save();
    res.status(201).json(newClothingItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addCartItem,
};