var express = require('express');
var app = new express();

var router = require('./server/routers/Router');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');




app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());



app.use(function(err,req,res,next){
	console.log(err);
});

app.use(express.static('web'));
app.use('/api',router);

var port = 8080;
app.listen(port);
console.log('server running at port :' + port );