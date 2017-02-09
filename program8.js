var http = require('http');
var stream = require('concat-stream');

http.get(process.argv[2], function (response) {
	response.setEncoding('utf8');
    response.pipe(stream(function (data) { 
		console.log(data.length)
		console.log(data)
    }));
})
