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

import WolInterfacesSearch from "../wolinterfaces/WolInterfacesSearch";

import {
	AppendBottom
} from "../common/layout";

export class WolInterfaces extends React.Component {
	render() {
		return(
			<Row>
				<Col md={12}>
					<AppendBottom>
						<Link to="/createwoldevice">
							<Button>
								Lisää wol laite
							</Button>
						</Link>
					</AppendBottom>
					<WolInterfacesSearch
						getItemLink={id => {
							return "/updatewolinterface/" + id;
						}} />
				</Col>
			</Row>
		);
	}
}

export default compose(

)(WolInterfaces);