// Lesson 6
// --------
var server = require('./server');
// Add the router module
var router = require('./router');
// Pass the router route interface to the server start method
server.start(router.route);