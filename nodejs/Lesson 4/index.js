// Lesson 4
// --------

// Now just like getting a Node module, like http, by calling require, the same can be done for the server module we defined in the server.js file.
var server = require('./server');
// And invoke the exported API from this module
server.start();