const mongoose = require("mongoose");

const clothingItemSchema = mongoose.Schema(
  {
    alt: String,
    brandNew: Boolean,
    category: String,
    gender: String,
    name: String,
    price: Number,
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    salePrice: Number,
    src: String,
    style: String,
  },
  {
    collection: 'clothing',
    timestamps: true,
  }
);

const clothingItemModel = mongoose.model("ClothingItem", clothingItemSchema);

module.exports = {
  clothingItemSchema: clothingItemSchema,
  clothingItemModel: clothingItemModel,
};
