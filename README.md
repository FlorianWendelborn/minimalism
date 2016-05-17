# Minimalism

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Build Status](https://api.travis-ci.org/dodekeract/minimalism.svg)](https://travis-ci.org/dodekeract/minimalism/)
[![Code Climate](https://codeclimate.com/github/dodekeract/minimalism/badges/gpa.svg)](https://codeclimate.com/github/dodekeract/minimalism)
[![Coverage Status](https://coveralls.io/repos/github/dodekeract/minimalism/badge.svg?branch=master)](https://coveralls.io/github/dodekeract/minimalism?branch=master)
[![NPM Downloads](https://img.shields.io/npm/dt/minimalism.svg)](https://npmjs.com/package/minimalism)
[![NPM Dependencies](https://david-dm.org/dodekeract/minimalism.svg)](https://david-dm.org/dodekeract/minimalism)

Cleans up the mess in your GitHub project root by allowing to move config files into package.json.

## Installation

- `npm install --save minimalism`

## Usage

1. Include unwanted config files in your `package.json`

````json
{
	"minimalism": {
		".travis.yml": "sudo: false\nlanguage: node_js\nnode_js:\n  - 'stable'\n  - '4.2.0'\nscript: npm run travis"
	}
}
````

2. Add `minimalism` as a dependency.
3. Add this postinstall script to your `package.json`.

````json
{
	"scripts": {
		"postinstall": "node node_modules/minimalism/source"
	}
}
````

4. `.gitignore` the unwanted config-files so they won't show up in your commits (tip: you can include your `.gitignore` in your `package.json`)
