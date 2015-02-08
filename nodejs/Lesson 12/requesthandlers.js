// Lesson 12
// --------
// This is the file that will handle each of the request from the server that came via the router module.
// We are going to have two functions this time 
// start: initial request and default request that will start the application and will provide with a means to select a file or stuff that need to be uploaded.
// and
// upload: This is supposed to do the upload file(image file) logic
// All the above functions will be added in consecutive lessons to come.
// We will start with plain implementations this time.


// Get the nodejs module child_process and get the exec operation from it.
// This allows us to execute a shell command. As below, we execute the command find / which is gonna be way to expensive comapared to the ls -lah call
var exec = require('child_process').exec;

function start(response)
{
	console.log("Request handler start was called.");
	exec('find /',{timeout:10000, maxBuffer: 20000*1024}, function(error, stdout, stderr){
		response.writeHead(200, {'Content-Type':'text/plain'})
		response.write(stdout);
		response.end();
	});
}
function upload(response)
{
	console.log("Request handler upload was called.");
	response.writeHead(200, {'Content-Type':'text/plain'})
	response.write('Hello upload... Lesson 12' );
	response.end();
}

exports.start = start;
exports.upload = upload;