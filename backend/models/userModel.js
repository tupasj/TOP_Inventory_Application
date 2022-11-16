const mongoose = require("mongoose");
const clothingItemModelFile = require("./clothingItemModel");
const clothingItemSchema = clothingItemModelFile.clothingItemSchema;

const userSchema = mongoose.Schema(
  {
    cart: [clothingItemSchema],
    email: {
      type: String,
      unique: true,
    },
    joinedDate: {
      type: Date,
      default: Date.now,
    },
    member: {
      type: Boolean,
      default: false,
    },
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
