// Lesson 2
// --------
// Create the Web Server for your application. Since node does not provide any web server of its own, we need to create our own.
// Get the node module HTTP. 
var http = require('http');

// With the http module, create your server with the defined method createServer.
// This method takes a callback function as the argument which in turn takes the request and response objects as the paramters.
// With the callback function also the createServer method can be invoked. But basically this will not server any purpose to you as a user.
/*
For Eg:
	http.createServer().listen(8000);  8000 being the port where the created server listens to for request and send response to.
*/
var server = http.createServer(function(request, response){
	console.log('Got a request.');
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello world from Node');
	response.end();
});
server.listen(8000);
console.log('Server started @ 8000. Try http://localhost:8000 to see the result.');