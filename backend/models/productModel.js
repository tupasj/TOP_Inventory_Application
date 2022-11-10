const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    alt: String,
    brandNew: Boolean,
    category: String,
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
    timestamps: true,
  }
);

const productModel = mongoose.model("Product", productSchema);

module.exports = {
  productSchema: productSchema,
  productModel: productModel,
};