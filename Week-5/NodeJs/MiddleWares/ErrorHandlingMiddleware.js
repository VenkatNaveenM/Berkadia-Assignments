/*
ERROR-HANDLING MIDDLEWARE:

Error-handling middleware always takes four arguments.
You must provide four arguments to identify it as an error-handling middleware function.
Even if you don’t need to use the next object, you must specify it to maintain the signature.
Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.

Error-handling middleware functions in the same way as other middleware functions,
except with four arguments instead of three, specifically with the signature (err, req, res, next)):

*/

var express = require('express')
var app = express()
var a=9;
app.use('/',function (req, res, next) {
    if(a===99){
    console.log('Request Type:', req.method)
    next()
    }else{ throw new Error('Check value of (a)');}
  })

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send(err.message+' Something Wrong')
  })

app.post('/', function (req, res,next) {
    res.send('From Post method');
    next()
});
app.get('/', function (req, res,next) {
    res.send('From Get method');
})
app.listen(5000,()=>console.log('Listening on server port 5000'))



/*
Output:

If a=99

C:\Users\Venkat Naveen\Downloads\SHAREit\Week-5\NodeJs\Middlewares>node ErrorHandlingMiddleware.js
Listening on server port 5000
Request Type: POST
Request Type: GET

If a != 99

error occurred:

Check value of (a) Something Wrong

*/