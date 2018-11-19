var http = require('http');
http.createServer(function (req, res) {
  res.write('1693 port is loaded');
  res.end();
}).listen('1693','127.0.0.11');