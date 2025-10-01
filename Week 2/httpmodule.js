// 9/30/25 CSI244 Lecture #3 Node intro
const fs = require("fs");
const path = require("path");
//only going to use http module today
//http module is used to setup a webserver
//its just a server which responds to requests (http)
const http = require("http");
//to start a server create variable by calling http.createServer((req, res)=>{})
//req is request res is response

const server = http.createServer((req, res)=> {
    // lets try to send back an html file
    console.log(req.url);
    if(req.url === "/") {
        //we want to send an html
    }
    //this is an endpoint
    if(req.url === "/test"){
        res.end("Test Working");
        console.log(req.url);
    }
    //if a request goes to /api (application programming interface)
    if(req.url === "/api"){
        //we can put information in the header of the response
        //include a status code of 200 (ok) - im sending you json data
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify({ name: "Josh Emery", age: 43}));
    }
});

//start the server
//your server starts at 127.0.0.1 which is localhost
//it also runs on a port number
server.listen(3000, () => {
    console.log(`server started on http://127.0.0.1:3000`);
});