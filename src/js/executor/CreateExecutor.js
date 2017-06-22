import React from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import {
    TextInputGroup
} from "../form";

import Button from "react-bootstrap/lib/Button";

export class CreateExecutor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ""
		}
	}

	render() {
		return (
			<div>
				<TextInputGroup label="Nimi" value={this.state.name}
				 onChange={value => this.setState({ name: value })} />
				 <Button onClick={e => {
					if (this.props.onCancel) this.props.onCancel();
				 }}>
				 	Peruuta
				 </Button>
				 <Button bsStyle="info" onClick={e => {
					this.props.createExecutor(this.state.name).then(data => {
						if (this.props.onCreate) this.props.onCreate();
					});
				 }}>
				 	Ok
				 </Button>
			</div>
		)
	}
}

export default graphql(gql`
mutation createExecutor($name: String) {
	createExecutor(name: $name) {
		id
		name
	}
}`, {
    props: ({ ownProps, mutate }) => ({
        createExecutor(name) {
            return mutate({
                variables: {
                    name
                }
            })
        }
    })
})(CreateExecutor);