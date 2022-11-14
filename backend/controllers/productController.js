const { getClothingByType, getQueryByType } = require("../utils/clothingUtils");

const getClothing = async (req, res, type) => {
  if (type) {
    const query = getQueryByType(type);
    getClothingByType(req, res, query);
  } else {
    getClothingByType(req, res);
  }
};

module.exports = {
  getClothing,
};
