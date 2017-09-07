const path = require("path");
const ModuleConfig = require("./src/moduleconfig");

module.exports = {
	target: "node",
	module: ModuleConfig,
	entry: {
		app: path.resolve(__dirname, "src", "app.js")
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "akseli.js"
	}
};