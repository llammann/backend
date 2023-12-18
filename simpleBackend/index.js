const express = require("express");
const app = express();
const port = 3000;

let arr = [
  { id: 1, name: "john" },
  { id: 2, name: "jane" },
];

app.get("/", (req, res) => {
  //   res.send(arr);
  res.send("Users");
});

app.get("/users", (req, res) => {
  res.send(arr);
});

app.get("/users/:id", (req, res) => {
  //   console.log(req.params.id);
  const id = req.params.id;
  console.log(typeof id);
  const selectedElem = arr.find((elem) => +elem.id === +id);
  res.send(selectedElem);
  console.log(selectedElem);
});

app.get("/users/:id", (req, res) => {
  //   console.log(req.params.id);
  const id = req.params.id;
  console.log(typeof id);
  const selectedElem = arr.filter((elem) => +elem.id !== +id);
  res.send(selectedElem);
  console.log(selectedElem);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
