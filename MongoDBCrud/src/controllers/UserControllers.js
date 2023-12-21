const User = require("../models/UserModel");

// GET ALL USER
const getAllUsers = async (req, res) => {
  let allUsers = await User.find({});
  res.send(allUsers);
  console.log("getAllUsers");
};

// POST USER
const postUser = async (req, res) => {
  const newUser = new User(req.body);
  newUser.save();
};

// DELETE USER
const deleteUser = async (req, res) => {
  let Userid = req.params.id;
  let findUser = await User.findOne({ id: Userid });
  let _id = findUser._id;
  let deletedUser = await User.findByIdAndDelete(_id);
  console.log(deletedUser);
};

// GET USER BY ID USER
const getUserById = async (req, res) => {
  let Userid = req.params.id;
  let findUser = await User.findOne({ id: Userid });
  res.send(findUser);
};

module.exports = { postUser, getAllUsers, deleteUser, getUserById };
