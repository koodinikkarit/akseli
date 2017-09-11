import React from "react";
import {
	compose
} from "react-apollo";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import CreateComputer from "../computers/CreateComputer";
import ComputersSearch from "../computers/ComputersSearch";

export class CreateComputerPage extends React.Component {
	render() {
		return (
			<Row>
				<Col md={6}>
					<CreateComputer
						onCreate={() => {
							this.props.history.push("/computers");
						}}
						getCancelLinkPath={() => {
							return "/computers";
						}} />
				</Col>
				<Col md={6}>
					<ComputersSearch
						getItemLink={id => `/editcomputer/${id}`} />
				</Col>
			</Row>
		);
	}
}


export default compose(

)(CreateComputerPage);