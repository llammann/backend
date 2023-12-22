const mongoose = require("mongoose");

const Userschema = mongoose.Schema(
  {
    name: String,
    id: Number,
    age:Number,
    username:String,
    surname:String
  },
  { collection: "Users", timestamps: true }
);

const User = mongoose.model("Users", Userschema);

module.exports = User;
