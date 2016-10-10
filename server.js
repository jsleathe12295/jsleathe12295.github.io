var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.end('<h1>Welcome</h1>');
});

app.use(function(req, res, next) {
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(3000, function() {
  console.log('server started and running at http://localhost:3000');
})

var handleRequest = function(req, res) {
  fs.readFile(__dirname + '/public' + req.url, function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
    }
    res.writeHead(200);
    res.end(data);
  })
}

var server = http.createServer(handleRequest);

server.listen(3001, function(){
  console.log("server started http://localhost:3001")
})
