// Lesson 9
// --------
var http = require('http');
var url = require('url');

// start handling the handle here
function start(route, handle)
{
	function onRequest(request, response)
	{
		var pathName = url.parse(request.url).pathname;
		// Avoiding unnecessary consoles for the default requests for favicon.ico. This is not part of the lesson or intentional.
		// Just for convenience of the terminal message.
		if(pathName !== '/favicon.ico')
		{
			console.log('Got a request for '+pathName);
		}
		response.writeHead(200, {'Content-Type': 'text/plain'});
		var content = route(handle, pathName);
		response.write(content+'.. Lesson 9!');
		response.end();
	}
	var server = http.createServer(onRequest);
	server.listen(8000);
	console.log('Server started @ 8000. Try http://localhost:8000 to see the result.');
}
exports.start = start;