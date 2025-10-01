// 9/30/25 CSI244 Lecture #3 Node intro
const fs = require("fs");
//fs is used manage files in node
//writefile() takes 3 arguments
//first is a filename
//second is the data you want to write
//third is a callback function that will be called when its done
//--tgar callback function will be given an error if one occurred
// function writeCallBack(error){
//     if (error){
//         console.log(error);
//         return;
//     }
//     console.log("file written");
// }
//fs.writeFile("example.txt", "Hello Node!", writeCallBack); //file will be created if it doesnt already exist
//anonomous function
fs.writeFile("example.txt", "Hello Node!", (error) => {
    if(error){
        console.error(error);
    }
    console.log("File Written");
});

//readfile
fs.readFile("example.txt", "utf-8", (error, data) => {
    if(error){
        console.log(error);
    }
    console.log(data);
});