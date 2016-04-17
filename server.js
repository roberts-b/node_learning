var http = require('http');
var static = require("./static.js");


http.createServer(function(request, response){
	console.log(`Incoming requests from: ${request.url}`);

	if(static.canHandleRequest(request)){
		static.serveStaticAssets(request, response);
		
		return;
	}
	response.end('Hello worlds');
}).listen(3000, '127.0.0.1', () => {
	console.log('Server is listening on localhost 3000');
});