const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors())

const Port = 3000;
const bodyParser = require("body-parser");
let SingersData = require("./db.json");
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("Singers");
});

// GET,NAME DETAIL
app.get("/singers", function (req, res) {
  console.log("get method");

  if (req.query.name) {
    console.log("namee name");

    const name = req.query.name;
    const Singer = SingersData.singers.find((elem) =>
      elem.name.toLowerCase().includes(name.toLowerCase())
    );
    res.send(Singer);
  } else {
    res.send(SingersData);
  }
  console.log("nameeeeeeeeee");
});

// DETAIL
app.get("/singers/:id", function (req, res) {
  const id = req.params.id;
  const Singer = SingersData.singers.find((elem) => elem.id == id);
  res.send(Singer);
  console.log("detail");
});

// DELETE
app.delete("/singers/:id", function (req, res) {
  const id = req.params.id;
  SingersData = SingersData.singers.filter((elem) => elem.id != id);
  res.send(SingersData);
  console.log("delete");
});

// POST
app.post("/singers", function (req, res) {
  const NewSinger = req.body;
  NewSinger.id = new Date();
  SingersData.singers.push(NewSinger);
  res.send(SingersData);
  console.log("post");
});

app.listen(Port, () => console.log(`listening ${Port}`));
