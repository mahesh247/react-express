const webpack = require('webpack');
const path = require('path');

const config = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: './build/bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
					plugins: ['@babel/plugin-transform-runtime']
				}
			}
		]
	},
	devtool: 'source-map' // enum
};

module.exports = config;
