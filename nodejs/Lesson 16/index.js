// Lesson 16
// --------
var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.start; // Default start
handle['/start'] = requestHandlers.start; // start request 
handle['/upload'] = requestHandlers.upload; // upload request
handle['/show'] = requestHandlers.show; // upload request

server.start(router.route, handle);