var fs = require('fs');

function canHandleRequest(request){
	return request.url.startsWith("/static")
		|| request.url == '/favicon.ico';
}

exports.canHandleRequest = canHandleRequest;


function serveStaticAssets(request, response){
	var url = request.url.substr(1);

	if(url == 'favicon.ico'){
		url = 'static/favicon.ico';
	}

	fs.readFile(url, (error, data)=>{
		if(error){
			console.log("Error file not found: "+ error);
			response.statusCode = 404;
			response.end('Path not really found 404');
		}

		response.end(data);
		console.log('End of callback!');

	});
	console.log('End of serve serveStaticAssets!');
}

exports.serveStaticAssets = serveStaticAssets;