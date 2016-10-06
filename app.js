var env          = process.env;
var express = require('express');

var port = env.NODE_PORT || 8080;
var addr = env.NODE_IP || 'localhost';

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, addr, function () {
  console.log('Example app listening on port 3000!');
});