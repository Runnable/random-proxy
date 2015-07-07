var request = require('request');
var http = require('http');
var host = process.env.RANDOM_HOST || 'localhost';
var port = process.env.RANDOM_PORT || 8000;
var myPort = process.env.PORT || 9000;

http.createServer(function (req, res) {
  request('http://' + host + ':' + port, function (err, response, body) {
    if (err) {
      res.writeHead(502, {"Content-Type": "text/plain"});
      res.end("Could not reach " + host + ':' + port);
      return;
    }
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(body);
  });
}).listen(myPort);

console.log("Proxy Running on port " + myPort);

