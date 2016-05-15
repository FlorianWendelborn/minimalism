#! /usr/bin/env node

var packageJSON = require('./package.json');
var fs = require('fs');

if (packageJSON.minimalism) {
	for (let name of Object.keys(packageJSON.minimalism)) {
		let content = packageJSON.minimalism[name];
		fs.writeFileSync(name, content);
	}
}
