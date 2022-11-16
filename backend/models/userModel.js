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
      minLength: 2,
      maxLength: 50,
      required: true,
    },
    password: {
      type: String,
      minLength: 8,
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
