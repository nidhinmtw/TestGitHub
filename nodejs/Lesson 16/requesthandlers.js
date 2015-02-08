// Lesson 16
// --------
// Modifies and adds a new method show to take an image (/tmp/test.png) file and show it in the browser.
// Uploading file from the other side will come up in the next lesson
// But for this I will need the nodejs built-in module fs for file-system.

var querystring = require("querystring"),
	fs = require("fs");

function start(response, postData)
{
	console.log("Request handler start was called.");
	var body = "<html>"+
					"<head>"+
						"<meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />"+
					"</head>"+
					"<body>"+
						"<form action='/upload' method='post'>"+
							"<textarea name=text rows=20 cols=60></textarea>"+
							"<input type='text' name='urname' value='Your name goes here'/>"+
							"<input type='submit' value='Submit Text'/>"+
						"</form>"+
					"</body>"+
				"</html>";
		response.writeHead(200, {'Content-Type':'text/html'})
		response.write(body);
		response.end();
}
function upload(response, postData)
{
	console.log("Request handler upload was called.");
	response.writeHead(200, {'Content-Type':'text/html'})
	response.write('Hello upload... Lesson 16!!! You have sent field/text ::  '+ querystring.parse( postData).text );
	response.write('</br>Hello upload... Lesson 16!!! You have sent field/urname ::  '+ querystring.parse( postData).urname );
	response.end();
}

function show(response)
{
	console.log("Request handler 'show' was called");
	response.writeHead(200, {"Content-Type" : "image/png"});
	fs.createReadStream("./tmp/test.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;