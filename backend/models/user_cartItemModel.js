const mongoose = require("mongoose");

const user_CartItemSchema = mongoose.Schema(
  {
    clothingItem: { type: mongoose.Types.ObjectId, ref: "ClothingItem" },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  {
    collection: "users.cartItems",
    timestamps: true,
  }
);

module.exports = mongoose.model("User_CartItem", user_CartItemSchema);
