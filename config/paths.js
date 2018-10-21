/*****
 * This file exports variables for use in:
 * 
 * 1. webpack config files
 * 2. server files
 * 
 */

 const path = require('path');
 const fs = require('fs');

 const appDirectory = fs.realpathSync(process.cwd());
 const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

 module.exports = {
	 appAssets: resolveApp("src/assets"), // images & other static assets
	 appBuild: resolveApp("build"), // final production build files
	 appConfig: resolveApp("config"),
	 appHtml: resolveApp("src/index.html"),
	 appIndexJs: resolveApp("src/index.js"), // main entry point
	 appSrc: resolveApp("src") // root app source
 };