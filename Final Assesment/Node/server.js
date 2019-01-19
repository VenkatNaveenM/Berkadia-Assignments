var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers","Content-Type");
  next();
})
 
require('./app/routes/student.routes.js')(app);


 
// Create a Server
var server = app.listen(9009, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Server running At http://%s:%s", host, port)
 
})