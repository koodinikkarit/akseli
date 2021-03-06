import "core-js/es6/map";
import "core-js/es6/set";
import "es6-string-polyfills";
import "es6-weak-map/implement";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "react-apollo";
import registerServiceWorker from "./registerServiceWorker";

import { createPetriClient } from "petri-client";
import { resolvers, defaults } from "./resolvers";

const developmentEnvironment =
	process && process.env && process.env.NODE_ENV === "development";

const graphqlHost = (developmentEnvironment
	? process.env.REACT_APP_GRAPHQL_HOST
	: window.location.host) as string;

const graphqlPort = (developmentEnvironment
	? parseInt(process.env.REACT_APP_GRAPHQL_PORT as string, 10)
	: parseInt(window.location.port, 10)) as number;

const graphqlSubscriptionsHost = (developmentEnvironment
	? process.env.REACT_APP_GRAPHQL_HOST
	: window.location.host) as string;

const graphqlSubscriptionsPort = developmentEnvironment
	? parseInt(process.env.REACT_APP_GRAPHQL_PORT as string, 10)
	: parseInt(window.location.port, 10);

const client = createPetriClient({
	graphqlHost,
	graphqlPort,
	graphqlSubscriptionsHost,
	graphqlSubscriptionsPort,
	resolvers: resolvers,
	defaults: defaults
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root") as HTMLElement
);
registerServiceWorker();
