// Lesson 7
// --------
// This is the file that will handle each of the request from the server that came via the router module.
// We are going to have two functions this time 
// start: initial request and default request that will start the application and will provide with a means to select a file or stuff that need to be uploaded.
// and
// upload: This is supposed to do the upload file(image file) logic
// All the above functions will be added in consecutive lessons to come.
// We will start with plain implementations this time.

function start()
{
	console.log("Request handler start was called.");
}
function upload()
{
	console.log("Request handler upload was called.");
}

exports.start = start;
exports.upload = upload;