var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
  console.log("The url is " + req.url);
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  var myObj = {
    name: "sourav",
    age: 25,
  };
  res.end(JSON.stringify(myObj));
});

server.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server Running");
});
