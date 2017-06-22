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
import FormControl from "react-bootstrap/lib/FormControl";

export class CecActions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<Layout>
				<ListGroup>
					{this.props.keijos && this.props.keijos.map(p => (
						<ListGroupItem key={p.id}>
							<Row>
								<Col xs={5}>
									{p.name}
								</Col>
								<Col xs={2}>
									<Button bsStyle="success" onClick={e => {
										this.props.turnOnCecDevice(p.id, 0);
									}}>Käynnistä</Button>
								</Col>
							</Row>
							<Row>
								<Col xs={5}>
									<FormControl componentClass="select" placeholder="select"
									 onChange={e => {
										 this.props.changeKeijoSource(p.id, e.target.value);
									 }}>
										<option value={1}>HDMI 1</option>
										<option value={2}>HDMI 2</option>
										<option value={3}>HDMI 3</option>
										<option value={4}>HDMI 4</option>
									</FormControl>
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
		keijos: fetchKeijos {
			id,
			name
		}
	}`, {
		props: ({ ownProps, data: { keijos, loading } }) => ({
			keijos,
			loading
		})
	}),
	graphql(gql`
	mutation turnOnCecDevice($keijoId: Int, $address: Int) {
		turnOnCecDevice(keijoId: $keijoId, address: $address)
	}`, {
		props: ({ ownProps, mutate }) => ({
			turnOnCecDevice(keijoId, address) {
				return mutate({
					variables: {
						keijoId, 
						address
					}
				})
			}
		})
	}),
	graphql(gql`
	mutation changeKeijoSource($keijoId: Int, $sourceNumber: Int) {
		changeKeijoSource(keijoId: $keijoId, sourceNumber: $sourceNumber)
	}`, {
		props: ({ ownProps, mutate }) => ({
			changeKeijoSource(keijoId, sourceNumber) {
				return mutate({
					variables: {
						keijoId,
						sourceNumber
					}
				})
			}
		})
	})
)(CecActions);