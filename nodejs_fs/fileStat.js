"use strict";

var fs = require('fs');

var stat = fs.stat('out.txt', function(err, stat) {
	if (err) {
		console.log('err:\n' + err);
	} else {
		console.log('isFile: ' + stat.isFile());
		console.log('isDirctory: ' + stat.isDirectory());
		console.log('size: ' + stat.size);
		console.log('birthtime: ' + stat.birthtime);
		console.log('mtime: ' + stat.mtime);
	}
});