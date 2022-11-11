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
