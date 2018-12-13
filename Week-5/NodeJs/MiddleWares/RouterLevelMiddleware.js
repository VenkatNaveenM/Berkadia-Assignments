/*

ROUTER LEVEL MIDDLEWARE:

Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().

var router = express.Router()

Load router-level middleware by using the router.use() and router.METHOD() functions.

*/
var express = require('express')
var app = express()
var router = express.Router()

router.use('/', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  })

router.post('/', function (req, res,next) {
    res.send('From Post method');
});
router.get('/', function (req, res,next) {
    res.send('From Get method');
})
app.listen(5000,()=>console.log('Listening on server port 5000'))

app.use('/', router)


/*
Output:

C:\Users\Venkat Naveen\Downloads\SHAREit\Week-5\NodeJs\Middlewares>node RouterLevelMiddleware.js
Listening on server port 5000
Request URL: /
Request Type: POST
Request URL: /
Request Type: GET

*/