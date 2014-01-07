var express = require('express');
var http= require('http');

var portNumber = 3000;
var app = express();

app.get('/proxy', function(request, response){
  	performProxyCall(request.query.urlToFetch, response);
});

function performProxyCall(url, response){
	http.get(url, function(responseFromOtherDomain) {
	  	var contentType = responseFromOtherDomain.headers['content-type'];
		responseFromOtherDomain.on("data", function(responseBody) {
			response.writeHead(200, {'Content-Type': contentType});
		    response.end(responseBody);
	  	});
	});
}

app.use(express.static(__dirname)); //serve static content

app.listen(portNumber);
console.log('Requester with proxy is listening on port '+ portNumber);