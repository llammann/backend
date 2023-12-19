const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require("body-parser");
require("dotenv").config();
require ("./src/config/db")


app.get("/", (req, res) => {
  //   res.send(arr);
  res.send("Users");
});

// ! get all element
app.get("/users", (req, res) => {
  res.send(arr);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
