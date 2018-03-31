"use strict";

// 导入http模块
var http = require("http");

// 创建http server， 监听3000端口
http.createServer(function (request, response) {
	
	// 回调函数接受request，response对象
	console.log(request.method + ": " + request.url);

	// 响应200，并设置Content-Type
	response.writeHead(200, {'Content-Type': 'text/html'});

	response.end('<h1>Hello node.js http</h1>');
}).listen(3000);

console.log('Server is running at port 3000...');