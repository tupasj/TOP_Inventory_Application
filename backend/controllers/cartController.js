const User = require("../models/userModel");

const addCartItem = async (req, res, userEmail) => {
  // Get the user by their email. Populate method ensures cart property gets objects instead of just object IDs.
  const currentUser = await User.find({ email: userEmail });
  // Push the clothingItem, along with the specified quantity if applicable, to the user's cart array
  if (req.body.quantity) {
    req.body.clothingItem.quantity = req.body.quantity;
  }
  currentUser[0].cart.push(req.body.clothingItem);
  // console.log('user.cart after push: ', currentUser[0].cart);

  try {
    const updatedUser = await currentUser[0].save();
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserCart = async (req, res, userEmail) => {
  try {
    const userCart = await User.findOne({ email: userEmail }).populate("cart").select("cart -_id");
    res.status(200).json(userCart.cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addCartItem,
  getUserCart,
};
