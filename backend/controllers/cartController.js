const ClothingItem = require("../models/clothingItemModel");
const User = require("../models/userModel");

const addCartItem = async (req, res, userEmail) => {
  // Get the user by their email
  const currentUser = await User.find({email: userEmail});
  // Push the clothingItem, along with the specified quantity if applicable, to the user's cart array
  if (req.body.quantity) {
    req.body.clothingItem.quantity = req.body.quantity;
  }
  currentUser[0].cart.push(req.body.clothingItem);
  console.log('user.cart after push: ', currentUser[0].cart);

  try {
    const updatedUser = await currentUser[0].save();
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addCartItem,
};
