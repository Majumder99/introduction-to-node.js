var fs = require("fs");

//Create directory
// fs.mkdir("async", (err) => {
//   if (err) throw err;
//   console.log("directory created");
// });

// Remove directory
// fs.rmdir("stuff", (err) => {
//   if (err) throw err;
//   console.log("Directory removed");
// });

fs.mkdir("stuff", () => {
  fs.readFile("readThis.txt", "utf8", (err, data) => {
    fs.writeFile("./stuff/stuffWrite.txt", data, (err) => {
      if (err) throw err;
      console.log("file created");
    });
  });
});

//Delete a file
// fs.unlink("writeMe.txt", (err) => {
//   if (err) throw err;
//   console.log("File deleted");
// });

//Delete file and delete directory
// fs.unlink("./stuff/stuffWrite.txt", () => {
//   fs.rmdir("stuff", (err) => {
//     if (err) throw err;
//     console.log("Directory deleted");
//   });
// });
