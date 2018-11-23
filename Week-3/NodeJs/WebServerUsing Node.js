const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



/*
OutPut:

C:\Users\Venkat Naveen\Berkadia\Week 3\NodeJs>node WebServer.js
Server running at http://127.0.0.1:3000/

*/