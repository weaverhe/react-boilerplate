/*****
 * Webpack config data for development only
 */

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const paths = require("./paths");
const common = require("./webpack-common-config.js") // import common webpack config

module.exports = merge(common, {
	entry: [paths.appIndexJs],
	mode: "development",
	devtool: "eval",
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development")
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(paths.appSrc),
				exclude: /(node_modules)/,
				use: [
					{
						// use babel for transpiling JavaScript files
						loader: "babel-loader",
						options: {
							presets: ["@babel/react"]
						}
					},
					{
						loader: "eslint-loader"
					}
				]
			},
			{
				test: /\.(css|styl)$/,
				include: [path.resolve(paths.appSrc)],
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							discardDuplicates: true,
							importLoaders: 1,
							modules: true,
						}
					},
					{
						loader: "stylus-loader",
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	}
})