var http = require("http");

//We have created a server
var server = http.createServer((req, res) => {
  console.log("Request made from " + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("This is sourav");
});

//Sending request
server.on("error", (err) => {
  throw err;
});
server.listen(3000, () => {
  console.log("server bound");
});
