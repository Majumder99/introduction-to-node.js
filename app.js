var express = require("express");
var app = express();

app.set("view engine", "ejs"); //View engine means how browser will see it

app.get("/", (req, res) => {
  res.send("This is homepage");
});

app.get("/contact", (req, res) => {
  res.send("This is contact page");
});

app.get("/profile/:id", (req, res) => {
  //   res.send("You are about to see the id " + req.params.id);
  var data = {
    name: "sourav",
    age: 25,
  };
  res.render("profile", { person: req.params.id, data: data });
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server is running");
});
