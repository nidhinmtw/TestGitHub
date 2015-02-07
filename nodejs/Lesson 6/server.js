// Lesson 6
// --------
var http = require('http');
var url = require('url');

function start(route)
{
	function onRequest(request, response)
	{
		var pathName = url.parse(request.url).pathname;
		console.log('Got a request for '+pathName);
		route(pathName);
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write('Hello world from Node by index.js file... Lesson 6!');
		response.end();
	}
	var server = http.createServer(onRequest);
	server.listen(8000);
	console.log('Server started @ 8000. Try http://localhost:8000 to see the result.');
}
exports.start = start;