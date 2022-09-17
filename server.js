// Import third party NodeJS module: Connect
const connect = require('connect');

// Instantiate app-server
const app = connect();

// Custom middleware
function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World')
}

// Custom middleware
function byeWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Goodbye World')
}

// Add middleware to application
app.use('/', helloWorld);
app.use('/hello', helloWorld);
app.use('/bye', byeWorld);

// Run app
app.listen(3000);
console.log('Server running at http://localhost:3000');
