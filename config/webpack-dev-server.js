/*****
 * The file responsible for running the local project server
 */

 const WebpackDevServer = require("webpack-dev-server");
 const webpack = require("webpack");
 const paths = require("./paths");
 const config = require("./webpack-dev-config");

 // Change port as needed
 const Port = 3000;
 const Host = "localhost";

 const options = {
	 host: Host,
	 hot: true, // enable hot module replacement feature
	 overlay: { // full screen browser overlay for compiler errors & warnings
		warnings: false,
		errors: true,
	 },
	 quiet: false, // show errors & warnings in console
	 noInfo: false, // hide build info
	 contentBase: paths.appAssets, // where to serve static files from
	 watchContentBase: true, // force reload on file updates
	 after() {
		 process.stdout.write(`dev server is running: http:\/\/${Host}:${Port}\n`);
	 }
 };

 WebpackDevServer.addDevServerEntrypoints(config, options);
 const compiler = webpack(config);
 const server = new WebpackDevServer(compiler, options);

 server.listen(Port, Host, () => {});