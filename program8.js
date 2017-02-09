var http = require('http');
var stream = require('concat-stream');
var fs = require('fs');
var print = function (data) {

    var result = data.toString();
    console.log(result.length);
    console.log(result);
};

var done = function (response) {

    response.pipe(stream(print));
    response.on('error', function (err) {
        console.error(err);
        process.exit(1);
    });

};
/*http.get(process.argv[2], function (response) {
	response.setEncoding('utf8');
	function pipe(response, out) {
		response.on("error", function(error) {
		out.emit("error", error);
		});
		response.on("data", function(data) {
		out.write(data);
		});
		response.on("end", function() {
		out.emit("end");
		});
	};
});
*/