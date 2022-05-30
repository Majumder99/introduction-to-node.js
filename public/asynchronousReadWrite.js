var fs = require("fs");

fs.writeFile("readThis.txt", "I from dhaka", (err) => {
  if (err) throw err;
  console.log("file created");
});

fs.readFile("readThis.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("This will run before reading & creating the file");
