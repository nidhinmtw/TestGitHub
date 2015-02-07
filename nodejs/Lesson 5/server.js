// Lesson 5
// --------
var http = require('http');
// Get the url module of node
var url = require('url');

function start()
{
	function onRequest(request, response)
	{
		// url module can parse the request.url and give fields like pathname
		// What else can the url module do?
		// What else are there in the parse output of the url?
		var pathName = url.parse(request.url).pathname;
		console.log('Got a request for '+pathName);
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write('Hello world from Node by index.js file... Lesson 5!');
		response.end();
	}
	var server = http.createServer(onRequest);
	server.listen(8000);
	console.log('Server started @ 8000. Try http://localhost:8000 to see the result.');
}
// Convert our server start code into a module which will now be used by the index.js(main file of the application),
// rather than invoking this file code directly from the node terminal.
exports.start = start;