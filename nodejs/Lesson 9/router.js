// Lesson 9
// --------
// Create the router to handle the individual requests.
// It is not the job of the web server module to handle each and every requests independtly.
// Start taking the handle map for requesthandling
function route(handle, pathname)
{
	// Avoiding unnecessary consoles for the default requests for favicon.ico. This is not part of the lesson or intentional.
	// Just for convenience of the terminal message.
	if(pathname !== '/favicon.ico')
	{
		console.log("About to handle a route a request for "+ pathname);
	}
	if(typeof handle[pathname] === 'function')
	{
		return handle[pathname]();//invoke the handler function as per the path name parsed
	}
	else
	{
		// Avoiding unnecessary consoles for the default requests for favicon.ico. This is not part of the lesson or intentional.
		// Just for convenience of the terminal message.
		if(pathname !== '/favicon.ico')
		{
			console.log("No request handler found for "+pathname);
		}
		return '404 Not found';

	}
}
exports.route = route;