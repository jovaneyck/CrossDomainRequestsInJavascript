var express = require('express');
var http= require('http');

var portNumber = 3000;
var app = express();

app.use(express.static(__dirname)); //serve static content (index.html)

app.listen(portNumber);
console.log('Requester is listening on port '+ portNumber);