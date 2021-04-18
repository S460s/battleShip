/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
module.exports = {
	devtool: 'eval-source-map',
	mode: 'development',
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: 'ts-loader',
				include: [path.resolve(__dirname, 'src')],
			},
		],
	},

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.js', '.ts'],
	},
};
