const express = require("express");
require("dotenv").config();
require("./src/config/db");

const app = express();
const port = process.env.PORT || 3333;

const bodyParser = require("body-parser");
const routes = require("./src/routers/UserRouter"); // new

app.use(bodyParser.json());
app.use("/", routes); // new

app.get("/", (req, res) => {
  res.send("Products");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
