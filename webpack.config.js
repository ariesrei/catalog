var path = require('path'),
	webpack = require("webpack");


module.exports = {
	entry: "./src/index.js",
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'src')
	}
};