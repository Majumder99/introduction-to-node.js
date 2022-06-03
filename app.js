var express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("This is homepage");
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server is running");
});
