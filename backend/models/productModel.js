const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    alt: String,
    brandNew: Boolean,
    category: String,
    name: String,
    price: Number,
    rating: Number,
    salePrice: Number,
    src: String,
    style: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
