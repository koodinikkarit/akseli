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


export class Computer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this);
		return (
			<Layout>
				{!this.props.loading &&
				<Form>
					<TextInputGroup
					 type="text"
					 label="Nimi"
					 placeholder="Nimi"
					 value={this.props.computer.name}
					 onChange={value => this.props.editComputer({
						 id: this.props.computer.id,
						 name: value
					 })} />
					<TextInputGroup
					 type="text"
					 label="Mac"
					 placeholder="Mac"
					 value={this.props.computer.mac}
					 onChange={value => this.props.editComputer({
						 id: this.props.computer.id,
						 mac: value
					 })} />
					 <Button bsStyle="danger" onClick={e => {
						 this.props.removeComputer(this.props.computer.id).then(data => {
							this.props.history.push("/devices/computers");
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
	query fetchComputerById($id: Int!) {
		computer: fetchComputerById(id: $id){
			id
			name
			mac
		}
	}`, {
		options: (ownProps) => {
			return {
				variables: {
					id: ownProps.match.params.id
				}
			}
		},
		props: ({ ownProps, data: { computer, loading } }) => ({
			computer,
			loading
		})
	}),
	graphql(gql`
	mutation editComputer($id: Int, $name: String, $mac: String) {
		editComputer(id: $id, name: $name, mac: $mac) {
			id,
			name
			mac
		}
	}`, {
		props: ({ ownProps, mutate }) => ({
			editComputer({ id, name, mac }) {
				return mutate({
					variables: {
						id,
						name,
						mac
					}
				})
			}
		})
	}),
	graphql(gql`
	mutation removeComputer($computerId: Int) {
		removeComputer(computerId: $computerId)
	}`, {
		props: ({ ownProps, mutate }) => ({
			removeComputer(id) {
				return mutate({
					variables: {
						computerId: id
					}
				})
			}
		})
	})
)(Computer);