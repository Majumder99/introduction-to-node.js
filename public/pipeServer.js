var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
  console.log("The url is " + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  var myReadAbleStream = fs.createReadStream(
    __dirname + "/streamRead.txt",
    "utf-8"
  );
  myReadAbleStream.pipe(res);
});

server.listen(3000);
console.log("Server is listening on 3000");
