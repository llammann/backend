const express = require("express");
const app = express();
require("dotenv").config();
require("./src/config/db");

const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const UserRouter = require("./src/routers/UserRouter"); //root

app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Users");
//   console.log("home page");
// });

app.use("/", UserRouter); //root

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
