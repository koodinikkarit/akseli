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

import CreateExecutor from "./CreateExecutor";

export class ExecutorsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			createExecutor: false
		};
	}

	render() {
		console.log("this.", this.props);
		return (
			<Layout>
				{!this.state.createExecutor &&
				<Button bsStyle="info" onClick={e => this.setState({ createExecutor: true })}>
					Luo suorittaja
				</Button>}
				<Row>
					<Col sm={6}>
						<Collapse in={this.state.createExecutor}>
							<div>
								<CreateExecutor 
								 onCancel={e => {
									 this.setState({
									 	createExecutor: false
									 });
								 }} 
								 onCreate={e => {
									 this.setState({
										 createExecutor: false
									 });
								 }}/>
							</div>
						</Collapse>
					</Col>
				</Row>
				<ListGroup>
					{!this.props.loading && this.props.executors.map(p => (
						<ListGroupItem key={p.id} href={"/executor/" + p.id}>
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
	executors : fetchExecutors {
		id
		name
	}
}`, {
	props: ({ ownProps, data: { executors, loading } }) => ({
		executors: executors ? executors : []
	})
})(ExecutorsList);