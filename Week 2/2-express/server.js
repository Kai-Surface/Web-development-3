// 10/2/25 CSI 244 lecture #4
console.log("Hello Express");
console.log("Hello Nodemon");
//now we can use express
const express = require("express");
const os = require("os");
const path = require("path");

//step 2 - we call the express constructor to create an app
const app = express();

//we creaye our endpoints with app.get()
//this is an endpoints at the root mywebhost.com
app.get("/", (req, res) => {
    console.log("Hit the root endpoint");
    res.send("Hello from the root")
});
app.get("/system", (req, res) => {
  const sysObject = {
    platform: os.platform(),
    freemem: os.freemem(),
    release: os.release(),
  };
  res.send(sysObject);
});
app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
});

//the query is passed in the url
app.get("/form-submit", (req, res) => {
    //console.log(req.query);
    res.sendFile(path.join(__dirname, "public", "index.html"))
});

//listen on a port
app.listen(5001, () => {
    console.log(`Server started on http://localhost:5001`);

});

