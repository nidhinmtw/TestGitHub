// Lesson 13
// --------
// Lets try to give some content out to be drawn to the page when the start function is called and this function should serve data to the upload function.
// As for this lesson we will create a textarea and take its bigggggg content entered by the user to process further.
// THis will mainly show us data coming in chunks until the last end chunk comes in.

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
	response.writeHead(200, {'Content-Type':'text/plain'})
	response.write('Hello upload... Lesson 13!!! You have sent '+ postData );
	response.end();
}

exports.start = start;
exports.upload = upload;