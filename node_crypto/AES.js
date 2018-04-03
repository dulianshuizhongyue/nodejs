"use strict";

const crypto = require('crypto');

// 加密算法
function AESEncrypt(data, key) {
	const cipher = crypto.createCipher('aes192', key);
	var crypted = cipher.update(data, 'utf8', 'hex');
	crypted += cipher.final('hex');
	return crypted;
}

// 解密算法
function AESDecrypt(encrypted, key) {
	const decipher = crypto.createDecipher('aes192', key);
	var decrypted = decipher.update(encrypted, 'hex', 'utf8');
	decrypted += decipher.final('utf8');
	return decrypted;
}

var data = 'Hello, this is a secret message!';
var key = 'Password!';
var encrypted = AESEncrypt(data, key);
var decrypted = AESDecrypt(encrypted, key);

console.log('加密文字： ' + data);
console.log('加密后： ' + encrypted);
console.log('解密后： ' + decrypted);