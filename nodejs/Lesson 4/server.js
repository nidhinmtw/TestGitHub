// Lesson 4
// --------
var http = require('http');

function start()
{
	function onRequest(request, response)
	{
		console.log('Got a request.');
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write('Hello world from Node by index.js file... Lesson 4!');
		response.end();
	}
	var server = http.createServer(onRequest);
	server.listen(8000);
	console.log('Server started @ 8000. Try http://localhost:8000 to see the result.');
}
// Convert our server start code into a module which will now be used by the index.js(main file of the application),
// rather than invoking this file code directly from the node terminal.
exports.start = start;