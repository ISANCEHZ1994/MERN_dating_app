// THIS IS OUR WEB SERVER!!

// With the help from both NODE and it's framework EXPRESS we can create 
// clean and readable code instead of writing more lines of code

// Example of Node without Express: taken from https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction

// Load HTTP module
// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000;

// // Create HTTP server 
// const server = http.createServer((req, res) => {

//    // Set the response HTTP header with HTTP status and Content type
//    res.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body "Hello World"
//    res.end('Hello World\n');
// });

// // Prints a log once the server starts listening
// server.listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}/`);
// })

import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req,res) => 
    res.send(`This is my dating app is on port ${PORT}`)
)

app.listen(PORT, () => 
    console.log(`Our dating server is running on ${PORT}`)
)

