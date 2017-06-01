import React from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import {
	Layout
} from "../layout";

import ListGroup from "react-bootstrap/lib/ListGroup"
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";

export class PenttiDevices extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<Layout>
				{!this.props.loading &&
				<ListGroup>
					{this.props.penttiDevices.map(p => (
						<ListGroupItem key={p.id} href={"./penttidevice/" + p.id}>
							{p.ip}
						</ListGroupItem>
					))}
				</ListGroup>}
			</Layout>
		)
	}
}

export default graphql(gql`
query {
	penttiDevices: fetchPenttiDevices {
		id
		ip
	}
}`, {
	props: ({ ownProps, data: { penttiDevices, loading } }) => ({
        penttiDevices,
        loading
    })
})(PenttiDevices);