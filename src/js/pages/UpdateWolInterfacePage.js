import React from "react";
import {
	compose
} from "react-apollo";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import UpdateWolInterface from "../wolinterfaces/UpdateWolInterface";
import WolInterfacesSearch from "../wolinterfaces/WolInterfacesSearch";

export class UpdateWolInterfacePage extends React.Component {
	render() {
		const {
			wolInterfaceId
		} = this.props.match.params;
		return (
			<Row>
				<Col md={6}>
					<UpdateWolInterface
						wolInterfaceId={wolInterfaceId}
						onSave={() => {
							this.props.history.push("/wolinterfaces");
						}}
						onRemove={() => {
							this.props.history.push("/wolinterfaces");
						}}
						getCancelLinkPath={() => {
							return "/wolinterfaces";
						}} />
				</Col>
				<Col md={6}>
					<WolInterfacesSearch
						getItemLink={id => {
							return "/updatewoldevice/" + id;
						}} />
				</Col>
			</Row>
		);
	}
}

export default compose(

)(UpdateWolInterfacePage);