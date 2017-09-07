import ReactDOM from "react-dom";
import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "./client";
import Router from "./Router";

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router />
	</ApolloProvider>,
	document.getElementById("root")
);