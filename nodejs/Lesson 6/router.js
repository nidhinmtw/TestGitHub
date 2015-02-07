// Lesson 6
// --------
// Create the router to handle the individual requests.
// It is not the job of the web server module to handle each and every requests independtly.
function route(pathname)
{
	console.log("About to handle a route a request for "+ pathname);
}
// Export the route API for the now written router module
exports.route = route;