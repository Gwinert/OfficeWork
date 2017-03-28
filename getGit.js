let cheerio = require('cheerio');
const https = require('https');
const fs = require('fs');
var document = '';
https.get('https://git-scm.com/downloads', function(res){
	res.on('data', function(chunk){
		document+=chunk;
	})
	res.on('end', function(){
		let $ = cheerio.load(document); 
		var version = $("span[class*='version']").text();
		console.log(version);
        fs.writeFile('./ver.txt', version ,function(){
		console.log("Git Version Checked")});

	})
})