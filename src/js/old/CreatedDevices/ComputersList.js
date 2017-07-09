import React from "react";
import { graphql } from 'react-apollo';
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

import CreateComputer from "./CreateComputer";

export class ComputersList extends React.Component {
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
								<CreateComputer 
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
				</Row>
				<ListGroup>
					{this.props.computers.map(p => (
						<ListGroupItem key={p.id} href={"./computer/" + p.id}>
							{p.name}
						</ListGroupItem>
					))}
				</ListGroup>
			</Layout>
		)
	}
}

export default graphql(gql`
query {
	computers: fetchComputers {
		id
		name
	}
}`, {
	props: ({ ownProps, data: { computers } }) => ({
		computers: computers ? computers : []
	})
})(ComputersList);