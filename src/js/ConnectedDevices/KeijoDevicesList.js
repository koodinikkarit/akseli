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


export class KeijoDevicesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			creatingDevice: false
		}
	}

	render() {
		return (
			<Layout>
			</Layout>
		)
	}
}

export default graphql(gql`
query {
	keijos: fetchKeijos {
		id
	}
}`, {
	props: ({ ownProps, data: { keijos } }) => ({
		keijos: keijos ? keijos : []
	})
})(KeijoDevicesList);