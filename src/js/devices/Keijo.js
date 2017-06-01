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
	TextInputGroup
} from "../form";

import Form from "react-bootstrap/lib/Form";
import Button from "react-bootstrap/lib/Button";

export class Keijo extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<Layout>
				{!this.props.loading &&
				<Form>
					<TextInputGroup label="Nimi" value={this.props.keijo.name}
					 onChange={value => {
						 this.props.editKeijo({
							 keijoId: this.props.keijo.id,
							 name: value
						 });
					 }} />
					<TextInputGroup label="Ip" value={this.props.keijo.ip}
					 onChange={value => {
						 this.props.editKeijo({
							 keijoId: this.props.keijo.id,
							 ip: value
						 });
					 }} />
					<TextInputGroup label="Port" value={this.props.keijo.port}
					 onChange={value => {
						 this.props.editKeijo({
							 keijoId: this.props.keijo.id,
							 port: value
						 });
					 }} />
					<Button bsStyle="danger" onClick={e => {
						this.props.removeKeijo(this.props.keijo.id).then(data => {
							this.props.history.push("/devices/cecdevices");
						});
					}}>
						Poista
					</Button>
				</Form>}
			</Layout>
		)
	}
}

export default compose(
	graphql(gql`
	query fetchKeijoById($keijoId: Int!) {
		keijo: fetchKeijoById(keijoId: $keijoId) {
			id
			name
			ip
			port
		}
	}`, {
		options: (ownProps) => {
			return {
				variables: {
					keijoId: ownProps.match.params.id
				}
			}
		},
		props: ({ ownProps, data: { keijo, loading } }) => ({
			keijo,
			loading
		})
	}),
	graphql(gql`
	mutation editKeijo($keijoId: Int!, $name: String, $ip: String, $port: String) {
		editKeijo(keijoId: $keijoId, name: $name, ip: $ip, port: $port) {
			id
			name
			ip
			port 
		}
	}`, {
		props: ({ ownProps, mutate }) => ({
			editKeijo({ keijoId, name, ip, port }) {
				return mutate({
					variables: {
						keijoId,
						name,
						ip,
						port
					}
				})
			}
		})
	}),
	graphql(gql`
	mutation removeKeijo($keijoId: Int) {
		removeKeijo(keijoId: $keijoId)
	}`, {
		props: ({ ownProps, mutate }) => ({
			removeKeijo(id) {
				return mutate({
					variables: {
						keijoId: id
					}
				})
			}
		})
	})
)(Keijo);