const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected MongoDB");
  })
  .catch((err) => {
    console.log("Failed" + err);
  });
