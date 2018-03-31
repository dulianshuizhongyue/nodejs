"use strict";

// 引用模块--即模块（js文件）的相对位置
var hello = require('./hello');

// 使用 hello 模块中的变量
hello.show('lll');
hello.miao('xiaohei');
console.log(hello.s)