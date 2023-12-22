const mongoose = require("mongoose");

const Productschema = mongoose.Schema(
  {
    name: String,
    id: Number,
    price: Number,
  },
  { collection: "ProductsCol", timestamps: true }
);

const Product = mongoose.model("Products", Productschema);

module.exports = Product;
