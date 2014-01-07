var express = require('express');

var portNumber = 3001;
var app = express();

app.get("/", function (req, res) {
  res.send({ response: "This is data returned from the server."  });
})

app.use(express.static(__dirname)); //serve static content (the proxy html page)

app.listen(portNumber);

console.log("Responding server listening on port "+portNumber);