import React from "react";
import { 
	graphql,
	compose
} from 'react-apollo';
import gql from 'graphql-tag';

import {
	Layout
} from "../layout";

import ListGroup from "react-bootstrap/lib/ListGroup"
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";
import Button from "react-bootstrap/lib/Button";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Collapse from "react-bootstrap/lib/Collapse";

import { default as CreateDevice } from "./CreateDevice";

export class ComputerList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			creatingDevice: false
		}
	}

	render() {
		return (
			<Layout>
				
				{!this.state.creatingDevice &&
				<Button bsStyle="info"
					onClick={e => {
						this.propts.createDevice();
					 }}>
						Luo
				</Button>}
				{/*<Row>
					<Col sm={6}>
						<Collapse in={this.state.creatingDevice}>
							<div>
								<CreateDevice
								 onCancel={e => {
									 this.setState({
									 	creatingDevice: false
									 });
								 }} 
								 onCreate={e => {
									 this.setState({
										 creatingDevice: false
									 });
								 }}/>
							</div>
						</Collapse>
					</Col>
				</Row>*/}
				<ListGroup>
					{this.props.devices.map(p => (
						<ListGroupItem key={p.id} href={"./device/" + p.id}>
							{p.name}
						</ListGroupItem>
					))}
				</ListGroup>
			</Layout>
		)
	}
}

export default compose(
	graphql(gql`
	query {
		devices: fetchDevices {
			id
		}
	}`, {
		props: ({ ownProps, data: { devices } }) => ({
			devices: devices ? devices : []
		})
	}),
	graphql(gql`
	mutation {
		createDevice {
			id
		}
	}`, {
		props: ({ ownProps, mutate }) => ({
			createDevice() {
				return mutate()
			}
		})
	})
)(ComputerList);