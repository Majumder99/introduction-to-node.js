var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
  console.log("The url is " + req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html", "utf-8").pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/contact.html", "utf-8").pipe(res);
  } else if (req.url === "/api/sourav") {
    res.writeHead(200, { "Content-Type": "application/json" });
    var sourav = [
      {
        name: "sourav",
        age: 28,
      },
      {
        name: "safin",
        age: 26,
      },
    ];
    res.end(JSON.stringify(sourav));
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html", "utf-8").pipe(res);
  }
});

server.listen(3000);
console.log("Server is listening on 3000");
