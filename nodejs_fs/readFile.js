"use strict";

var fs = require('fs');

// 异步读取文件
fs.readFile('simp.txt', 'utf-8', function(err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log('loading....');
		console.log(data);
	}
});


// 同步读取文件
var data = fs.readFileSync('out.txt', 'utf-8');
console.log("loading sync...\n" + data);
