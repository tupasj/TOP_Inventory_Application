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
    quantity: Number,
  },
  {
    collection: "clothing",
    timestamps: true,
  }
);

module.exports = mongoose.model("ClothingItem", clothingItemSchema);
