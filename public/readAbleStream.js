var http = require("http");
var fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname + "/stream.txt");
var myReadStream = fs.createReadStream(__dirname + "/streamRead.txt", "utf-8");

myReadStream.on("data", (chunk) => {
  console.log("Reading chunk of data on at a time ");
  console.log(chunk);
});
