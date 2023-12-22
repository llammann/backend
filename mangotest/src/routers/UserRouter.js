// const express = require("express")
// const router = express.Router()

const router = require("express").Router();

const ProductController = require("./../controllers/ProductController");

router.get("/products", ProductController.getAllProduct);
router.get("/products/:id", ProductController.getProductById);
router.post("/products", ProductController.postProduct);

router.delete("/products/:id", ProductController.deleteProduct);

router.patch("/products/:id", ProductController.updateUser);
router.put("/products/:id", ProductController.putUser);

module.exports = router;
