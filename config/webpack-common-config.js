/*****
 * 
 * This file contains configuration data
 * It's shared between dev & production
 * 
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const paths = require("./paths");
const tinyPng = require("tinypng-webpack-plugin");

const imageOptimizer = new tinyPng({
	key: "hmZBYBqGgKvMLcRAFRuaRkkKQBXk_ntA",
});

module.exports = {
	plugins: [
	imageOptimizer,
		new HtmlWebpackPlugin({
			inject: true,
			template: paths.appHtml
		})
	],
	resolve: {
		extensions: [".js", ".jsx"],
		modules: ["node_modules"],
		alias: {
			Components: path.resolve(paths.appSrc, "components"),
			Containers: path.resolve(paths.appSrc, "containers"),
			Utils: path.resolve(paths.appSrc, "utils")
		}
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				use: ["file-loader"]
			}
		]
	}
};