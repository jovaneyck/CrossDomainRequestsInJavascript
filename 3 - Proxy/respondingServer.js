var express = require('express');

var portNumber = 3001;
var app = express();

app.get("/", function (req, res) {
  res.send({ response: "This is data returned from the server, proxy style!"  });
})

app.listen(portNumber);

console.log("Responding server listening on port "+portNumber);