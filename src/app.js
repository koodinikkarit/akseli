import express from "express";
import path from "path";
import webpack from "webpack";
import WebpackMiddleware from "webpack-dev-middleware";
import React from 'react';
import ReactDOMServer from "react-dom/server";
import bodyParser from 'body-parser';

import {
	PageFrame
} from "./js/PageFrame";

import {
    Layout
} from "./js/layout";

const app = express();

const APP_PORT = 11111;

var port;
var development = false;

process.argv.forEach(function (arg, index) {
    if (arg === "-p") {
        port = process.argv[index + 1];
    }
    if (arg === "-d") {
        development = true;
    }
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static('public'));

var entry = {
	app: path.resolve(__dirname, 'js', 'app.js')
};

var module = {
	loaders: [
		{
			exclude: /node_modules/,
			loader: 'babel-loader',
			test: /\.js$/,
		},
	],
};

var output = {
	filename: '[name].js',
	path: './public/'
};

if (development) {
	output.path = "/public/";
	app.use(WebpackMiddleware(webpack({
        devtool: 'eval',
        entry: entry,
        module: module,
        output: output
    }), {
        contentBase: './public/',
        publicPath: '/js/',
        stats: "errors-only"
     }));
	 ssr();
} else {
	const compiler = webpack({
		devtool: "cheap-module-source-map",
		entry: entry,
		module: module,
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					'NODE_ENV': JSON.stringify('production')
				}
			})
		],
		output: output
	});

	// compiler.run(function (err, stats) {
    //      app.use("/api", graphQLHTTP({
    //          schema, graphiql: false, pretty: false
    //      }))
    //      app.get("/js/app.js", function (req, res, next) {
    //          res.sendFile(__dirname + '/public/app.js');
    //      });
    //      ssr();
    // });
	ssr();
}

function ssr() {
	app.get("/login", (req, res) => {
		res.redirect(302, "http://localhost:11111/");
	});

    app.use("/api", (req, res) => {

    });

    app.use((req, res) => {
		//console.log(req.body);
		//console.log("\n\n\n\nroutes", "\n\n\n routes \n\n\n", routes, "\n\n\n graphql \n\n", graphql, "\n\n schema \n\n", schema, "\n\n\n\n\n");
        // match({ routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {
        //     const client = new ApolloClient({
        //         ssrMode: true,
        //         // Remember that this is the interface the SSR server will use to connect to the
        //         // API server, so we need to ensure it isn't firewalled, etc
        //         networkInterface: createLocalInterface(graphql, schema),
        //     });
        //     const app = (
        //         <ApolloProvider client={client}>
        //             <RouterContext {...renderProps} />
        //         </ApolloProvider>
        //     );


        //     renderToStringWithData(app).then((content) => {
        //         const initialState = {
        //             [client.reduxRootKey]: {
        //                 data: client.store.getState()[client.reduxRootKey].data
        //             }
        //         };

        //         res.status(200);
        //         res.send(`<!doctype html>\n${ReactDOMServer.renderToString(<PageFrame content={content} state={initialState} />)}`);
        //         res.end();
        //     });
        // })

		res.status(200);
        res.send(`<!doctype html>\n${ReactDOMServer.renderToString(<PageFrame />)}`);
        res.end();
    });
}


app.listen(port || APP_PORT, () => {
    console.log("serveri on käynnissä");
});