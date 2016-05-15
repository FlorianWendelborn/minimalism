#! /usr/bin/env node

var fs = require('fs');
var path = require('path');

var packageJSON = require(path.join(process.cwd(), 'package.json'));

if (packageJSON.minimalism) {
	for (var name in packageJSON.minimalism) {
		var content = packageJSON.minimalism[name];
		fs.writeFileSync(path.join(process.cwd(), name), content);
	}
}
