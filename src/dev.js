import express from "express";
import path from "path";
import ConfigureApp from "./configureapp";
import Serve from "./serve";
import Webpack from "webpack";
import WebpackMiddleware from "webpack-dev-middleware";
import ModuleConfig from "./moduleconfig";

const app = express();

const entry = {
	app: path.resolve(__dirname, "js", "app.js")
};

const output = {
	filename: "[name].js",
	path: "/public/"
};

ConfigureApp(app);

app.use(WebpackMiddleware(Webpack({
	devtool: "eval",
	entry: entry,
	module: ModuleConfig,
	output: output
}), {
	contentBase: "../public/",
	publicPath: "/js/",
	stats: "errors-only"
}));

Serve(app);





