var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
  console.log("The url is " + req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf-8");
  myReadStream.pipe(res);
});

server.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server Running");
});
