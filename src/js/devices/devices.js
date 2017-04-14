import React from "react";


import CreateDevice from "./CreateDevice";

import { Layout } from "../Layout";

export class Devices extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			creatingDevice: false
		}
	}

	render() {
		return (
			<Layout
			 addClicked={e => {
				 this.setState({
					 creatingDevice: true
				 });
			 }}>
			 	{this.state.creatingDevice &&
				 <CreateDevice />}

			</Layout>
		)
	}
}