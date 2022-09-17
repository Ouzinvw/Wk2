//import http web server NodeJS core package
const http = require('http'); //This is using CommonJS

// import {http} from 'http';  This is using ES6

//Create the webserver event handler
const server = http.createServer((req, res) => {



    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
});

// Start the server
server.listen(3000);

console.log('Server running at http://localhost:3000');