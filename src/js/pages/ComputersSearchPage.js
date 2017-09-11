import React from "react";
import {
	compose
} from "react-apollo";

import {
	Link
} from "react-router-dom";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";

import {
	AppendBottom
} from "../common/layout";

import ComputersSearch from "../computers/ComputersSearch";

export class ComputersPage extends React.Component {
	render() {
		return (
			<Row>
				<Col md={12}>
					<AppendBottom>
						<Link to="/createcomputer">
							<Button>
								Luo tietokone
							</Button>
						</Link>
					</AppendBottom>
					<ComputersSearch
						getItemLink={(id) => {
							return `/updatecomputer/${id}`;
						}} />
				</Col>
			</Row>
		);
	}
}


export default compose(

)(ComputersPage);