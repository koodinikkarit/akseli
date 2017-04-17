import React from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import {
	Layout
} from "../layout";

import Button from "react-bootstrap/lib/Button";
import Well from "react-bootstrap/lib/Well";
import Collapse from "react-bootstrap/lib/Collapse";
import ListGroup from "react-bootstrap/lib/ListGroup"
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import CreateWolDevice from "./CreateWolDevice";

export class WolDevicesListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
	}

	render() {
		return (
			<ListGroupItem onClick={e => {
				this.setState({
					open: !this.state.open
				})
			}} header={this.props.name}>				
				<Collapse in={this.state.open}>
					<div>
						<h3>{this.props.ip}</h3>
						<h3>{this.props.mac}</h3>
					</div>
				</Collapse>	
			</ListGroupItem>
			
		)
	}	
}

export class WolDevices extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			creatingDevice: false
		}
	}

	render() {
		console.log(this.props.computers);
		return (
			<Layout>
				{!this.state.creatingDevice &&
				<Button bsStyle="info"
				 onClick={e => {
					this.setState({
						creatingDevice: true
					});
				 }}>
					Luo
				</Button>}
				<Row>
					<Col sm={6}>
						<Collapse in={this.state.creatingDevice}>
							<div>
								<CreateWolDevice 
								 onCancel={e => {
									 this.setState({
										 creatingDevice: false
									 });
								 }} />
							</div>
						</Collapse>
					</Col>
				</Row>
				<Collapse in={!this.state.creatingDevice}>
					<ListGroup>
						{this.props.computers.map(computer => (
							<WolDevicesListItem name={computer.name} ip={computer.ip} mac={computer.mac} />
						))}
					</ListGroup>
				</Collapse>
			</Layout>
		)
	}
}

export default graphql(gql`
query {
	fetchComputers {
		computers {
			id,
			name,
			ip,
			mac
		}
	}
}`, {
	props: ({ ownProps, data: { fetchComputers } }) => ({
		computers: fetchComputers ? fetchComputers.computers : []
	})
})(WolDevices);