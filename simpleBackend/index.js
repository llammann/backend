const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

// parse application/json
app.use(bodyParser.json());

let arr = [
  { id: 1, name: "john" },
  { id: 2, name: "jane" },
];

app.get("/", (req, res) => {
  //   res.send(arr);
  res.send("Users");
});

// ! get all element
app.get("/users", (req, res) => {
  res.send(arr);
});

//? get element by id
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const selectedElem = arr.find((elem) => +elem.id === +id);
  res.send(selectedElem);
});

// *delete element by id
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  arr = arr.filter((elem) => +elem.id !== +id);
  res.send(arr);
});

// ? post element
app.post("/users/", (req, res) => {
  const elem = req.body;
  arr.push(elem);
  res.send(arr);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
