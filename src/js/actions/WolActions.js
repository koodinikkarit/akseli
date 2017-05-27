import React from "react";
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import {
	Layout
} from "../layout";

import ListGroup from "react-bootstrap/lib/ListGroup"
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";

export class WolActions extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.computers);
		return (
			<Layout>
				<ListGroup>
					{this.props.computers && this.props.computers.map(computer => (
						<ListGroupItem>
							<Row>
								<Col xs={6}>
									{computer.name}
								</Col>
								<Col xs={6}>
									<Button bsStyle="info" onClick={e => {
										this.props.wakeup(computer.id);
									}}>Herätä</Button>
								</Col>
							</Row>
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
		fetchComputers {
			id,
			name,
			mac
		}
	}`, {
		props: ({ ownProps, data: { fetchComputers } }) => ({
			computers: fetchComputers ? fetchComputers : []
		})
	}),
	graphql(gql`
	mutation wakeup($computerId: Int) {
		wakeup(computerId: $computerId)
	}`, {
		props: ({ ownProps, mutate }) => ({
			wakeup(id) {
				return mutate({
					variables: {
						computerId: id
					}
				})
			}
		})
	})
)(WolActions);