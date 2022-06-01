var http = require("http");
var fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname + "/streamRead.txt");
var myReadStream = fs.createReadStream(__dirname + "/streamRead.txt", "utf-8");
var myWriteStream = fs.createWriteStream(__dirname + "/streanWriteMe.txt");

myReadStream.pipe(myWriteStream);
