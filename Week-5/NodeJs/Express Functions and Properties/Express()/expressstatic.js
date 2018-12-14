/*
EXPRESS.STATIC():

Static files are files that clients download as they are from the server.
Create a new directory, public. Express, by default does not allow you to serve static files.
You need to enable it using the following built-in middleware.

       app.use(express.static('public'));


Syntax:

express.static(root, [options])

-This is a built-in middleware function in Express. It serves static files and is based on serve-static.
-The root argument specifies the root directory from which to serve static assets. 
-The function determines the file to serve by combining req.url with the provided root directory. 
-When a file is not found, instead of sending a 404 response, it instead calls next() to move on to the next middleware, 
 allowing for stacking and fall-backs.

*/

var express = require('express');
var app = express();

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use(express.static('public', options))