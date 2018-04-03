"use strict";

const crypto = require('crypto');

// md5加密
const hash = crypto.createHash('md5');

// 多次使用，则拼接后转换成md5
hash.update('hello');
hash.update('world');

/**
 * 在线加密解密
 * http://tool.oschina.net/encrypt?type=2
 */

// 转换成32位
console.log("MD5加密： 32bit: " + hash.digest('hex'));
// fc5e038d38a57032085441e7fe7010b0

// 转换成base64
//console.log("MD5加密： base64: " + hash.digest('base64'));


// ---------------------------------

// sha1加密，可换成sha256、sha512等
const sha256 = crypto.createHash('sha256');
sha256.update('hello');

console.log("sha256加密： " + sha256.digest('hex'));

// ---------------------------------

// Hmac 算法，可以利用MD5或SHA1等的哈希算法, 不过需要密钥
const hmac = crypto.createHmac('sha256', 'secret-key');

hmac.update('hello world');

console.log("hmac加密：" + hmac.digest('hex'));
