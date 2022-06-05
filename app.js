var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs"); //View engine means how browser will see it

var urlencodedParser = bodyParser.urlencoded({ extended: false }); //This will convert our data from contact.eje

//Middleware code
//First method
// app.use("/assets", (req, res, next) => {
//   console.log(req.url);
//   next();
// });

//Second Method
app.use("/assets", express.static("assets"));

// app.get("/", (req, res) => {
//   res.send("This is homepage");
// });

// app.get("/contact", (req, res) => {
//   res.send("This is contact page");
// });
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/contact", (req, res) => {
//   res.sendFile(__dirname + "/contact.html");
// });
app.get("/", (req, res) => {
  res.render("index"); //Should be same as ejs file
});

app.get("/contact", (req, res) => {
  // console.log(req.query);
  res.render("contact", { obj: req.query });
});
app.post("/contact", urlencodedParser, (req, res) => {
  // console.log(req.query);
  // console.log(req.body);
  res.render("contact-success", { data: req.body });
});

app.get("/profile/:id", (req, res) => {
  //   res.send("You are about to see the id " + req.params.id);
  var data = {
    name: "sourav",
    age: 25,
    hobbies: ["eating", "walking", "sleeping"],
  };
  res.render("profile", { person: req.params.id, data: data });
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server is running");
});
