"use strict";

var s = "test";

var show = function (msg) {
	console.log("show: " + msg);
}

var miao = function miao(name) {
	console.log(name + ": miao!!!");
}

// 将本模块变量暴露，其他模块引用此模块即可使用

module.exports = {
	show: show,
	miao: miao,
	s: s
}
