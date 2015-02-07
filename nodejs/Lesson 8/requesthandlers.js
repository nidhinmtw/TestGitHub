// Lesson 8
// --------
// This is the file that will handle each of the request from the server that came via the router module.
// We are going to have two functions this time 
// start: initial request and default request that will start the application and will provide with a means to select a file or stuff that need to be uploaded.
// and
// upload: This is supposed to do the upload file(image file) logic
// All the above functions will be added in consecutive lessons to come.
// We will start with plain implementations this time.


// This Lesson says a way which is not advisable to return the content (the application logic exection in sync and send the result synchronosuly ) causing the heavy operation to stall the server.

function start()
{
	console.log("Request handler start was called.");
	return "Hello Start.";// Retrun the request handler response to the server.
}
function upload()
{
	console.log("Request handler upload was called.");
	return "Hello Uplaod.";// Retrun the request handler response to the server.
}

exports.start = start;
exports.upload = upload;