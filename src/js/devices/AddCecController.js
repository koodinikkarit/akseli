import React from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Form from "react-bootstrap/lib/Form";
import Button from "react-bootstrap/lib/Button";

import {
	TextInputGroup
} from "../form";

export class AddCecController extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			ip: "",
			port: ""
		}
	}

	render() {
		return (
			<Form>
				<TextInputGroup label="Nimi" value={this.state.name}
				 onChange={value => this.setState({ name: value })} />
				<TextInputGroup label="Ip" value={this.state.ip}
				 onChange={value => this.setState({ ip: value })} />
				<TextInputGroup label="Port" value={this.state.port}
				 onChange={value => this.setState({ port: value })} />
				<Button
                 onClick={e => {
                    if (this.props.onCancel) this.props.onCancel();
                 }}>
                    Peruuta
                </Button>
				<Button bsStyle="info" onClick={e => {
                    this.props.addKeijo({
						name: this.state.name,
                        ip: this.state.ip,
						port: this.state.port
                    }).then(data => {
                        if (this.props.onCreate) this.props.onCreate();
                    });
                }}>
                    Luo
                </Button>
			</Form>
		)
	}
}

export default graphql(gql`
mutation addKeijo($name: String, $ip: String, $port: String) {
	addKeijo(name: $name, ip: $ip, port: $port) {
		id
		ip
		name
		port
	}
}`, {
	props: ({ ownProps, mutate }) => ({
		addKeijo({ name, ip, port }) {
			return mutate({
				variables: {
					name, 
					ip,
					port
				}
			})
		}
	})
})(AddCecController);