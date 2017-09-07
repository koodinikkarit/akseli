const path = require("path");
const ModuleConfig = require("./src/moduleconfig");

module.exports = {
	module: ModuleConfig,
	entry: {
		app: path.resolve(__dirname, "src/js/", "app.js")
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "app.js"
	}	
};