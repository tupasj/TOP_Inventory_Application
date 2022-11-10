const mongoose = require("mongoose");
const productModelFile = require("./productModel");
const productSchema = productModelFile.productSchema;

const userSchema = mongoose.Schema(
  {
    cart: [productSchema],
    email: {
      type: String,
      unique: true,
    },
    joinedDate: Date,
    member: Boolean,
    name: {
      type: String,
      maxLength: 75,
      required: true,
    },
    password: {
      type: String,
      maxLength: 100,
      required: true,
    },
    profilePicture: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
