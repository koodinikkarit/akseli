import React from "react";

import {
	BrowserRouter as Router,
} from "react-router-dom";

import NavigationBar from "./NavigationBar";
import Routes from "./Routes";

export default class Main extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<NavigationBar />
					<Routes />
				</div>
			</Router>
		);
	}
}