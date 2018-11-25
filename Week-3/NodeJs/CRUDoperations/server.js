var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
require('./app/routes/student.routes.js')(app);
 
// Create a Server
var server = app.listen(9009, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Server running At http://%s:%s", host, port)
 
})