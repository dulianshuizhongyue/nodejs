"use strict";

var fs = require('fs');

var rs = fs.createReadStream('云烟成雨.txt', 'utf-8');

// 读取到的流数据
rs.on('data', function (chunck) {
	console.log('data');
	console.log(chunck);
})

// the end
rs.on('end', function() {
	console.log('read end...');
})

// error
rs.on('error', function(err) {
	console.log('err:\n' + err)
})