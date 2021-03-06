'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');
var pkg = require('../package.json');
var url = 'https://raw.githubusercontent.com/wshxbqq/jdf-webp-png/master/vendor/';
module.exports = new BinWrapper()
	.src(url + 'osx/cwebp', 'darwin')
	.src(url + 'linux/x86/cwebp', 'linux', 'x86')
	.src(url + 'linux/x64/cwebp', 'linux', 'x64')
	.src(url + 'win/x86/cwebp.exe', 'win32', 'x86')
	.src(url + 'win/x64/cwebp.exe', 'win32', 'x64')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'cwebp.exe' : 'cwebp');
