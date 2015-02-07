// Lesson 3
// --------
// Re-writing Lesson 2
var http = require('http');

function onRequest(request, response)
{
	console.log('Got a request.');
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello world from Node');
	response.end();
}
var server = http.createServer(onRequest);
server.listen(8000);
console.log('Server started @ 8000. Try http://localhost:8000 to see the result.');