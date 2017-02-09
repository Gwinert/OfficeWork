var http = require('http');
var stream = require('concat-stream');
    var results = [],
	urls = process.argv,
    resultsCount = 0;
	urls.splice(0,2);
	urls.forEach(function (url, i) {
	http.get(url, function (response) {
    response.setEncoding('utf8');

    response.pipe(stream(function (data) {
      results[i] = data;
      resultsCount++;

      if (resultsCount === urls.length) {
        results.forEach(function (result) {
          console.log(result);
		        });
			}
		}));    
	});
});
