var http = require("http");
var fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname + "/stream.txt");
var myReadStream = fs.createReadStream(__dirname + "/streamRead.txt", "utf-8");
var myWriteStream = fs.createWriteStream(__dirname + "/streanWrite.txt");

myReadStream.on("data", (chunk) => {
  console.log("New Chunk Received");
  myWriteStream.write(chunk);
});
