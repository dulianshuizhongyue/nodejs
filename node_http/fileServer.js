"use strict";

var fs = require('fs'),
	url = require('url'),
	path = require('path'),
	http = require('http');

// 从命令行参数获取root目录，默认当前目录
var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

// 创建服务器
var server = http.createServer(function (request, response) {
	
	// 将url解析成URL对象，并获取pathname
	var pathname = url.parse(request.url).pathname;

	// 获取对应的本地文件路径
	var filepath = path.join(root, pathname);

	// 获取文件状态
	fs.stat(filepath, function(err, stats) {
		if(!err && stats.isFile()) {
			// 没错，且是文件
			console.log('200 ' + request.url);
			response.writeHead(200);

			// 将文件导向response,  使用pipe，response本身就是一个输出流
			fs.createReadStream(filepath).pipe(response);
		} else {
			// 出错或文件不存在
			console.log('404 ' + request.url);
			response.writeHead(404);
			response.end('404 Not Found');
		}
	});

});

server.listen(3000);
console.log('Server is running at port 3000!');


/**
 * 部署的两种方式
 * 1. 直接执行js文件
 *	  node fileServer.js
 * 2.将文件的访问路径作为参数传递
 *    node fileServer.js D:\nodejs
 * 
 * url访问都是一样的： http://127.0.0.1:3000/index.html
 *    index.html 为要访问的文件，其中引入的css，js文件都根据相对路径自动传输
 */