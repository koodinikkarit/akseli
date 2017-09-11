import React from "react";
import {
	compose
} from "react-apollo";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import UpdateComputer from "../computers/UpdateComputer";
import ComputersSearch from "../computers/ComputersSearch";

export class UpdateComputerPage extends React.Component {
	render() {
		const {
			computerId
		} = this.props.match.params;
		return (
			<Row>
				<Col md={6}>
					<UpdateComputer
						computerId={computerId}
						onSave={() => {
							this.props.history.push("/computers");
						}}
						onRemove={() => {
							this.props.history.push("/computers");
						}}
						getCancelLinkPath={() => "/computers"} />
				</Col>
				<Col md={6}>
					<ComputersSearch
						getItemLin={id => `/editcomputer/${id}`} />
				</Col>
			</Row>
		);
	}
}


export default compose(

)(UpdateComputerPage);