const Product = require("./../models/ProductModels");

// GET ALL PRODUCT
const getAllProduct = async (req, res) => {
  let allProduct = await Product.find({});
  res.send(allProduct);

  console.log("GET ALL PRODUCT");
};

// POST PRODUCT
const postProduct = (req, res) => {
  console.log(req.body);
  const newProduct = new Product(req.body);
  newProduct.save();

  console.log("POST PRODUCT");
};

// GET PRODUCT BY ID
const getProductById = async (req, res) => {
  const UserId = req.params.id;
  const findUser = await Product.findOne({ id: UserId });
  res.send(findUser);

  console.log("GET PRODUCT BY ID");
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
  const UserId = req.params.id;
  const findUser = await Product.findOne({ id: UserId });
  let _id = findUser._id;
  const deletedUser = await Product.findByIdAndDelete(_id);

  console.log("DELETE PRODUCT");
};

// GET UPDATE USER/PATCH
const updateUser = async (req, res) => {
  const UserId = req.params.id;
  console.log(UserId);

  const updatedUser = await Product.findOneAndUpdate({ id: UserId }, req.body);

  console.log("GET UPDATE USER", updatedUser);
};

// GET PUT USER
const putUser = async (req, res) => {
  const UserId = req.params.id;
  console.log(UserId);

  const updatedUser = await Product.replaceOne({ id: UserId }, req.body);

  console.log("GET PUT USER", updatedUser);
};

module.exports = {
  getAllProduct,
  getProductById,
  deleteProduct,
  postProduct,
  updateUser,
  putUser,
};
