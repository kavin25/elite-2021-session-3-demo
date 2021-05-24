const fs = require("fs")

const fileContents = fs.readFileSync("example.txt");
console.log(fileContents.toString())

const newFileContents = "hello, world!";
fs.writeFileSync("example.txt", newFileContents);

const newFileContentsRead = fs.readFileSync("example.txt");
console.log(newFileContentsRead.toString())