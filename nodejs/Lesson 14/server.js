// Lesson 14
// --------
// Now when user sends us some data, depending on the size of the data, its gonna come in multi-chunks and one end chunk.
// So we need to listen to each chunk and buffer it together until the end packet comes and then the full data can be passed on to the relevant execution handle for proper processing.
var http = require('http');
var url = require('url');

// start handling the handle here
function start(route, handle)
{
	function onRequest(request, response)
	{
		var pathName = url.parse(request.url).pathname;
		if(pathName !== '/favicon.ico')
		{
			console.log('Got a request for '+pathName);
		}
		var postData = "";
		request.setEncoding("utf8");
		request.addListener("data", function(postDataChunk){
			postData += postDataChunk;
			console.log("Recieved a chunk ...!!!!!!!!!!!!!");
		});
		request.addListener("end", function(){
			route(handle, pathName, response, postData);
		});

	}
	var server = http.createServer(onRequest);
	server.listen(8000);
	console.log('Server started @ 8000. Try http://localhost:8000 to see the result.');
}
exports.start = start;