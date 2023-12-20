const mongoose = require("mongoose");

const Userschema = mongoose.Schema(
  {
    name: String,
  },
  { collection: "Users", timestamps: true }
);

const User = mongoose.model("Users", Userschema);

module.exports = User;
