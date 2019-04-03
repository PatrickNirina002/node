var http = require("http");
var monroute = require('./Route/route.js');

http.createServer(monroute.route).listen(8080);

console.log('Server demarer');