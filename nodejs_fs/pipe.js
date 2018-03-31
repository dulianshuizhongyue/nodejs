"use strict";

var fs = require('fs');

var rs = fs.createReadStream('out.txt');
var ws = fs.createWriteStream('out_copy.txt');

rs.pipe(ws);

console.log('copy successfully!')