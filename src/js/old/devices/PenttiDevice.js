import React from "react";
import { 
	graphql,
	compose
} from 'react-apollo';
import gql from 'graphql-tag';

import {
	Layout
} from "../layout";

import {
	TextInputGroup,
	TextGroup
} from "../form";

import Form from "react-bootstrap/lib/Form";
import Button from "react-bootstrap/lib/Button";

export class PenttiDevice extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<Layout>
				<div>
					{!this.props.loading &&
					<Form>
						<TextGroup label="ip" text={this.props.pentti.ip} />
						{this.props.pentti.buttons.map(p => (
							<h1>{p.id}</h1>
						))}
					</Form>}
				</div>
			</Layout>
		)
	}

}

export default compose(
	graphql(gql`
	query fetchPenttiById($penttiId: Int!) {
		pentti : fetchPenttiById(penttiId: $penttiId) {
			id
			ip
			buttons {
				id
				penttiId
			}
		}
	}`, {
		options: (ownProps) => {
			return {
				variables: {
					penttiId: ownProps.match.params.id
				}
			}
		},
		props: ({ ownProps, data: { pentti, loading } }) => ({
			pentti,
			loading
		})
	})
)(PenttiDevice);