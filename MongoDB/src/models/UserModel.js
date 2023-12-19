const mongoose = require("mongoose");

const Userschema = mongoose.Schema({
  name: String,
});

const User = mongoose.model("Post", schema);

module.exports = User;


