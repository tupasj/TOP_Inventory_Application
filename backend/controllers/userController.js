const User = require("../models/userModel");

const getUser = async (req, res, email, password) => {
  try {
    const user = await User.find({email, password});
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

const createUser = async (req, res) => {
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getUser,
  createUser,
};
