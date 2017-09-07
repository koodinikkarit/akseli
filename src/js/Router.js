import React from "react";

import {
	BrowserRouter as Router,
} from "react-router-dom";

import NavigationBar from "./NavigationBar";

export default class Main extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<NavigationBar />
				</div>
			</Router>
		);
	}
}