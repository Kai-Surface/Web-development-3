// 9/30/25 CSI244 Lecture #3 Node intro
//path helps out with file path related operations
const path = require("path");
//path can get you a file extension
const ext = path.extname("example.txt");
console.log(ext);
const fileName = path.basename("example.txt");
console.log(fileName);
//we also have access to some global variables 
//__filemane
console.log(__filename);
console.log(__dirname);
//we can use these to create a path
const fullPath = path.join(__dirname, "newFolder", "example.txt");
console.log(fullPath);
