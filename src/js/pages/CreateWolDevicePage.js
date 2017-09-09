import React from "react";
import {
	compose
} from "react-apollo";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import CreateWolInterface from "../wolinterfaces/CreateWolInterface";
import WolInterfacesSearch from "../wolinterfaces/WolInterfacesSearch";

export class CreateWoldevicePage extends React.Component {
	render() {
		return (
			<Row>
				<Col md={6}>
					<CreateWolInterface
						onCreate={() => {
							this.props.history.push("/woldevices");
						}}
						getCancelLinkPath={() => {
							return "/woldevices";
						}} />
				</Col>
				<Col md={6}>
					<WolInterfacesSearch
						getItemLink={id => {
							return "/editwoldevice/" + id;
						}} />
				</Col>
			</Row>
		);
	}
}

export default compose(

)(CreateWoldevicePage);