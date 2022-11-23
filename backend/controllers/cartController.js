const User = require("../models/userModel");
const CartItem = require("../models/user_cartItemModel");

const addCartItem = async (req, res, userEmail) => {
  const currentUser = await User.findOne({ email: userEmail });
  // console.log('currentUser: ', currentUser);
  // const isDuplicateItem = currentUser.cart.some(
  //   (element) => element._id === req.body.cartItem._id
  // );
  // console.log("isDuplicateItem: ", isDuplicateItem);

  // Edit: Make new CartItem using req.body.clothingItemID and req.body.quantity
  const cartItem = new CartItem({
    clothingItem: req.body.clothingItem._id,
  });
  if (req.body.quantity) {
    cartItem.quantity = req.body.quantity;
  }
  await cartItem.save();

  // Edit: Reassign the value of req.body.quantity instead of req.body.cartItem.quantity

  // Handle duplicates by updating item instead of adding a new one
  // if (isDuplicateItem) {
  //   if (req.body.quantity) {
  //     req.body.cartItem.quantity += req.body.quantity;
  //   } else {
  //     req.body.cartItem.quantity += 1;
  //   }
  // } else {
  //   if (req.body.quantity) {
  //     req.body.cartItem.quantity = req.body.quantity;
  //   }
  // }

  // Edit: push CartItem to cart
  // if (currentUser.cart === null) {
  //   currentUser.cart = [];
  // }
  currentUser.cart.push(cartItem);

  // console.log(`${currentUser.name}'s cart: `, currentUser.cart);
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
    const populatedCartItem = await CartItem.findById(user.cart[i]._id).populate(
      "clothingItem"
    );
    populatedCartItems.push(populatedCartItem);
  }

  try {
    res.status(200).json(populatedCartItems);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateUserCartItem = async (req, res, userEmail) => {
  // const user = await User.findOne({ email: userEmail });
  // const updatedOrder = req.body;
  // const indexOfOrderToUpdate = user.cart.indexOf(updatedOrder._id);
  // user.cart[indexOfOrderToUpdate] = updatedOrder;
  // console.log("updated cart", user.cart);
  // console.log("user.cart[0].quantity", user.cart[0].quantity);
  // console.log("user.cart.quantity", user.cart.quantity);
  // console.log(typeof user.cart);
  // try {
  //   const updatedUser = await user.save();
  //   res.status(200).json(updatedUser);
  // } catch (error) {
  //   res.status(400).json({ message: error.message });
  // }
};

module.exports = {
  addCartItem,
  getUserCart,
  updateUserCartItem,
};
