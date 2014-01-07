var express = require('express');

var portNumber = 3001;
var app = express();

app.get('/', function (req, res) {
	var callbankFunctionName = req.query.callback;
	
	res.set('Content-Type', 'application/javascript');
  	res.send(callbankFunctionName+"({'response': 'hello world from JSONP!'});");
})

app.listen(portNumber);

console.log("responding JSONP server listening on port "+portNumber);