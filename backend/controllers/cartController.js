const User = require("../models/userModel");
const CartItem = require("../models/user_cartItemModel");

const addCartItem = async (req, res, userEmail) => {
  const currentUser = await User.findOne({ email: userEmail });

  const cartItem = new CartItem({
    clothingItem: req.body.clothingItem._id,
  });
  if (req.body.quantity) {
    cartItem.quantity = req.body.quantity;
  }
  await cartItem.save();

  currentUser.cart.push(cartItem);
  try {
    const updatedUser = await currentUser.save();
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserCart = async (req, res, userEmail) => {
  const user = await User.findOne({ email: userEmail });
  let populatedCartItems = [];

  for (let i = 0; i < user.cart.length; i++) {
    const populatedCartItem = await CartItem.findById(
      user.cart[i]._id
    ).populate("clothingItem");
    populatedCartItems.push(populatedCartItem);
  }

  try {
    res.status(200).json(populatedCartItems);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateUserCartItem = async (req, res, userEmail) => {
  const user = await User.findOne({ email: userEmail });

  // Loop through user cart, when clothingItem._id from frontend matches with database entry, update the quantity of that entry
  let cartItem;
  for (let i = 0; i < user.cart.length; i++) {
    cartItem = await CartItem.findById(user.cart[i]._id);
    const savedClothingItemID = cartItem.clothingItem._id.toString();

    if (savedClothingItemID === req.body.clothingItem._id) {
      cartItem.quantity += req.body.quantity;
      break;
    }
  }

  try {
    const updatedCartItem = await cartItem.save();
    res.status(200).json(updatedCartItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addCartItem,
  getUserCart,
  updateUserCartItem,
};
