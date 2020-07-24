var http = require('http');
const route = require('./route');

http.createServer(route.handleRequest).listen(8000);