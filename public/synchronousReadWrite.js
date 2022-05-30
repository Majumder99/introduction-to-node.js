var fs = require("fs");

//Synchronous method
var readMe = fs.readFileSync("readMe.txt", "utf8");
fs.writeFileSync("writeMe.txt", "hello there");
fs.writeFileSync("newWriteMe.txt", readMe);

console.log(readMe);
