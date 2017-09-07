import React from "react";
import {
	compose,
	graphql
} from "react-apollo";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import EditWolInterface from "../wolinterfaces/EditWolInterface";
import WolInterfacesSearch from "../wolinterfaces/WolInterfacesSearch";

export class EditWolDevicePage extends React.Component {
	render() {
		const {
			wolInterfaceId
		} = this.props.match.params;
		console.log("wolInterfaceID is", wolInterfaceId);
		return (
			<Row>
				<Col md={6}>
					<EditWolInterface
						wolInterfaceId={wolInterfaceId} />
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

)(EditWolDevicePage);