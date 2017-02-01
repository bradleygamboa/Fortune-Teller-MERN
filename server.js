require('./app/data/db.js');
var express = require('express');
var path = require('path');
var app = express();
var routes = require('./app/routes');

app.set('port', process.env.PORT || 8080);

app.use(function(req, res, next){
  console.log(req.method, req.url);
  next();
}); //server logger - logs all requests in the terminal

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

var server = app.listen(app.get('port'), function(){
  var port = server.address().port;
  console.log('Listening on: ' + 'localhost:' + port);
});
