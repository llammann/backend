// const express = require("express");
// const router = express.Router();

const router = require("express").Router();
const UserControllers = require("../controllers/UserControllers");

router.post("/users", UserControllers.postUser);
router.get("/users", UserControllers.getAllUsers);
router.delete("/users/:id", UserControllers.deleteUser);
router.get("/users/:id", UserControllers.getUserById);
router.get("/users/:id", UserControllers.getUpdateUser);
router.get("/users/:id", UserControllers.putUser);

module.exports = router;
