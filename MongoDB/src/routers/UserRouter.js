// const express = require("express");
// const router = express.Router();

const router = require("express").Router();
const UserControllers = require("../controllers/UserControllers");

// router.post("/posts", async (req, res) => {
// 	const post = new Post({
// 		title: req.body.title,
// 		content: req.body.content,
// 	})
// 	await post.save()
// 	res.send(post)
// })

router.post("/users", UserControllers.postUser);
router.get("/users", UserControllers.getAllUsers);

module.exports = router;
