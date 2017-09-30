import React from "react";
import {
	compose,
	graphql
} from "react-apollo";

import {
	Link
} from "react-router-dom";

import {
	RectBoxInner,
	AppendBottom,
	AppendRight
} from "../common/layout";

import WolInterfacesSelect from "../wolinterfaces/WolInterfacesSelect";

import Button from "react-bootstrap/lib/Button";
import FormControl from "react-bootstrap/lib/FormControl";

import COMPUTER_QUERY from "./computer.graphql";
import UPDATE_COMPUTER_MUTATION from "./update_computer.graphql";
import REMOVE_COMPUTER_MUTATION from "./remove_computer.graphql";

export class UpdateComputers extends React.Component {
	state = {
		name: this.props.computer ? this.props.computer.name : "",
		ip: this.props.computer ? this.props.computer.ip : "",
		mac: this.props.computer ? this.props.computer.mac : "",
		wolInterfaceId: this.props.computer ? this.props.computer.wolInterfaceId : ""
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.computer) {
			this.setState({
				name: nextProps.computer.name,
				ip: nextProps.computer.ip,
				mac: nextProps.computer.mac,
				wolInterfaceId: nextProps.computer.wolInterfaceId
			});
		}
	}

	render() {
		return (
			<RectBoxInner>
				<AppendBottom>
					<label>
						Nimi
					</label>
					<FormControl type="text"
						value={this.state.name}
						onChange={(e) => {
							this.setState({
								name: e.target.value
							});
						}} />
				</AppendBottom>
				<AppendBottom>
					<label>
						Ip
					</label>
					<FormControl type="text"
						value={this.state.ip}
						onChange={(e) => {
							this.setState({
								ip: e.target.value
							});
						}} />	
				</AppendBottom>
				<AppendBottom>
					<label>
						Mac
					</label>
					<FormControl type="text"
						value={this.state.mac}
						onChange={e => {
							this.setState({
								mac: e.target.value
							});
						}} />
				</AppendBottom>
				<AppendBottom>
					<label>
						Wol rajapinta
					</label>
					<WolInterfacesSelect
						value={this.state.wolInterfaceId}
						onChange={value => {
							this.setState({
								wolInterfaceId: value
							});
						}} />
				</AppendBottom>
				<AppendRight>
					<Link to={this.props.getCancelLinkPath ?
						this.props.getCancelLinkPath() : ""}>
						<Button>
							Peruuta
						</Button>
					</Link>
				</AppendRight>
				<AppendRight>
					<Button bsStyle="danger"
						onClick={() => {
							this.props.removeComputer(this.props.computer.id).then(() => {
								if (this.props.onRemove) {
									this.props.onRemove();
								}
							});
						}}>
						Poista
					</Button>
				</AppendRight>
				<Button bsStyle="success"
					onClick={() => {
						this.props.updateComputer({
							computerId: this.props.computer.id,
							name: this.state.name,
							ip: this.state.ip,
							mac: this.state.mac,
							wolInterfaceId: this.state.wolInterfaceId
						}).then(() => {
							if (this.props.onSave) {
								this.props.onSave();
							}
						});
					}}>
					Tallenna
				</Button>
			</RectBoxInner>
		);
	}
}

export default compose(
	graphql(UPDATE_COMPUTER_MUTATION, {
		props: ({ mutate }) => ({
			updateComputer: (params) => mutate({
				variables: {
					params
				}
			})
		})
	}),
	graphql(REMOVE_COMPUTER_MUTATION, {
		props: ({ mutate }) => ({
			removeComputer: (computerId) => mutate({
				variables: {
					params: {
						computerId
					}
				}
			})
		})
	}),
	graphql(COMPUTER_QUERY, {
		options: () => ({
			computerId
		}) => ({
			variables: {
				computerId
			}
		}),
		props: ({
			data: {
				loading,
				computer
			}
		}) => {
			return {
				loading,
				computer
			}
		}
	})
)(UpdateComputers);