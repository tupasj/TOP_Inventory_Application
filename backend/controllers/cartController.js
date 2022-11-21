const User = require("../models/userModel");

const addCartItem = async (req, res, userEmail) => {
  const currentUser = await User.findOne({ email: userEmail });

  if (req.body.quantity) {
    req.body.clothingItem.quantity = req.body.quantity;
  }

  currentUser.cart.push(req.body.clothingItem);

  try {
    const updatedUser = await currentUser.save();
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserCart = async (req, res, userEmail) => {
  try {
    const userCart = await User.findOne({ email: userEmail })
      .populate("cart")
      .select("cart -_id");
    res.status(200).json(userCart.cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addCartItem,
  getUserCart,
};
