"use strict";

var fs = require('fs');

var data = '《天珠变》 -- 唐家三少';

// 异步写文件方法
fs.writeFile('simp.txt', data, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log('write complete...');
	}
});

// 同步写文件方法
fs.writeFileSync('out.txt', data);
console.log('write end!');