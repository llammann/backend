const User = require("../models/UserModel");

const getAllUsers = async (req, res) => {
  let allUsers = await User.find({});
  console.log("allUsers", allUsers);
  res.send(allUsers);
  console.log("getAllUsers");
};

const postUser = (req, res) => {
  console.log(req.body);
};

module.exports = { postUser, getAllUsers };
