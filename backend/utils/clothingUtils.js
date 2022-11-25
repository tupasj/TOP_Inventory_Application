const ClothingItem = require("../models/clothingItemModel");

const getQueryByType = (type) => {
  switch (type) {
    case "all":
      return {};
    case "men":
      return { gender: "male" };
    case "women":
      return { gender: "female" };
    case "brand-new":
      return { brandNew: true };
    case "on-sale":
      return { salePrice: { $exists: true } };
  }
};

const getClothingByType = async (req, res, query) => {
  try {
    const clothing = await ClothingItem.find(query);
    res.status(200).json(clothing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getQueryByType,
  getClothingByType,
};
