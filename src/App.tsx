import * as React from "react";
import "./App.css";
import { NavigationBar } from "./NavigationBar";
import { Button } from "react-bootstrap";

class App extends React.Component {
	render() {
		return (
			<div>
				<NavigationBar />
				<Button>Nappi</Button>
			</div>
		);
	}
}

export default App;
