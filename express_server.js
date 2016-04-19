var express = require('express');

var favicon = require('express-favicon');

var app = express();


app.get('/',function(request, response){
	console.log(`Incoming requests from: ${request.url}`);

	response.end('Hello world');
	});

app.get('/robik',function(request, response){
	console.log(`Incoming requests from: ${request.url}`);

	response.end('Hello robik from express!');
	});

//make express to use express static middleware to serve requests
//on static routes

app.use('/static', express.static('static'));

app.use(favicon(__dirname + '/static/favicon.ico'));

app.listen(3000, '127.0.0.1', () => {
	console.log('Server is listening on localhost 3000');
});