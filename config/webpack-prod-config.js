/*****
 * Configuration data specific to the production build
 */

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const paths = require("./paths");
const common = require("./webpack-common-config.js");

module.exports = merge(common, {
	entry: {
		// split vendor code into separate bundles
		vendor: ["react"],
		app: paths.appIndexJs
	},
	mode: "production",
	// set the name of our js bundle using a chuckhash
	output: {
		filename: "[chunkhash]_[name].js",
		path: paths.appBuild,
		publicPath: "/"
	},
	plugins: [
		// minify JS
		new UglifyJSPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new ExtractTextPlugin("styles.css") // extract css into separate file
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				include: path.resolve(paths.appSrc),
				exclude: /node_modules/,
				use: [
					{ 
						loader: "babel-loader",
						options: {
							presets: ["@babel/react"]
						}
					},
				]
			},
			{
				test: /\.(css|styl)$/,
				include: [path.resolve(paths.appSrc)],
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader",
							options: {
								discardDuplicates: true,
								sourceMap: false,
								modules: true,
							}
						},
						{
							loader: "stylus-loader"
						}
					]
				})
			}
		]
	}
});