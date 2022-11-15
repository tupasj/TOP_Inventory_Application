const User = require("../models/userModel");

const createUser = async (req, res) => {
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
    profilePicture: req.body.profilePicture,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createUser,
};