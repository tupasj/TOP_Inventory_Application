const clothingItemModelFile = require("../models/clothingItemModel");
const ClothingItem = clothingItemModelFile.clothingItemModel;
const { getClothingByType } = require("../utils/productControllerUtils");

const getClothing = async (req, res) => {
  getClothingByType(req, res);
};

const getMensClothing = async (req, res) => {
  getClothingByType(req, res, { gender: "male" });
};

const getWomensClothing = async (req, res) => {
  getClothingByType(req, res, { gender: "female" });
};

const getBrandNewClothing = async (req, res) => {
  getClothingByType(req, res, { brandNew: true });
};

const getOnSaleClothing = async (req, res) => {
  getClothingByType(req, res, { salePrice: { $exists: true } });
};

const getProductByID = async (req, res) => {
  getClothingByType(req, res, {_id: '636e980c0d6df4fde2b6002b'});
};

module.exports = {
  getClothing,
  getMensClothing,
  getWomensClothing,
  getBrandNewClothing,
  getOnSaleClothing,
  getProductByID,
};
