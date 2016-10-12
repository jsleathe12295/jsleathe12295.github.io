var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3001);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  console.log("hey");

  fs.readFile(__dirname + '/public/main.html', function(err, data) {

    if (err) res.status(404).end('<h1>404</h1>');

    res.end(data);

  });

});

app.get('*', function(req, res) {

  fs.readFile(__dirname + '/public' + req.url, function(err, data) {

    if (err) res.status(404).end('<h1>404</h1>');

    res.end(data);

  });

})

app.use(function(req, res, next) {
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

// app.listen(app.get('port'), function() {
//   console.log('server started and running at http://localhost:3000');
// })


var server = http.createServer(app);

server.listen(app.get('port'), function(){
  console.log("server started http://localhost:" + app.get('port'));
})
