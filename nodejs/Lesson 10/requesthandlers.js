// Lesson 10
// --------
// This is the file that will handle each of the request from the server that came via the router module.
// We are going to have two functions this time 
// start: initial request and default request that will start the application and will provide with a means to select a file or stuff that need to be uploaded.
// and
// upload: This is supposed to do the upload file(image file) logic
// All the above functions will be added in consecutive lessons to come.
// We will start with plain implementations this time.


// Get the nodejs module child_process and get the exec operation from it.
// This allows us to execute a NodeJS shell command. As below, we execute the command ls -lah to list all the files in the current directory.
var exec = require('child_process').exec;

function start()
{
	console.log("Request handler start was called.");
	var content = 'Folder empty';
	exec('ls -lah', function(error, stdout, stderr){
		content = stdout;
	});
	return content;
}
function upload()
{
	console.log("Request handler upload was called.");
	return "Hello Uplaod.";// Retrun the request handler response to the server.
}

exports.start = start;
exports.upload = upload;