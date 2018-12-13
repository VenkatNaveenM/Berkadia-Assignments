/*

APPLICATION-LEVEL MIDDLEWARE:

Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, 
where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

*/
var express = require('express')
var app = express()

app.use('/', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  })

app.post('/', function (req, res,next) {
    res.send('From Post method');
});
app.get('/', function (req, res,next) {
    res.send('From Get method');
})
app.listen(5000,()=>console.log('Listening on server port 5000'))

/*
Output:

C:\Users\Venkat Naveen\Downloads\SHAREit\Week-5\NodeJs\Middlewares>node ApplicationLevelMiddleware.js
Listening on server port 5000
Request URL: /
Request Type: GET
Request URL: /favicon.ico
Request Type: GET
Request URL: /
Request Type: GET
Request URL: /
Request Type: POST
Request URL: /
Request Type: GET
Request URL: /
Request Type: POST

*/