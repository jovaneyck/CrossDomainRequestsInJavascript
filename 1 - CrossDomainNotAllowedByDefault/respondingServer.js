var express = require('express');

var portNumber = 3001;
var app = express();

app.use(express.urlencoded());
app.use(express.json());

app.get("/", function (req, res) {
  console.log("GET request received");
  console.log(req.query);
  res.send({response: "This is data returned from the server"});
});

app.post("/", function (req, res) {
  console.log("POST request received");
  console.log(req.body);
  res.send({response: "This is data returned from the server"});
});

app.listen(portNumber);

console.log("Responding server listening on port "+portNumber);