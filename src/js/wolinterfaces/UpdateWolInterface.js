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

import Button from "react-bootstrap/lib/Button";
import FormControl from "react-bootstrap/lib/FormControl";

import WOL_INTERFACE_QUERY from "./wolinterface.graphql";
import UPDATE_WOL_INTERFACE_MUTATION from "./update_wol_interface.graphql";
import REMOVE_WOL_INTERFACE_MUTATION from "./remove_wol_interface.graphql";

export class UpdateWolInterface extends React.Component {
	state = {
		ip: this.props.wolInterface ? this.props.wolInterface.ip : "",
		port: this.props.wolInterface ? this.props.wolInterface.port : "",
		wolInterfaceId: this.props.wolInterfaceId ? this.props.wolInterfaceId : ""
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.wolInterface) {
			this.setState({
				ip: nextProps.wolInterface.ip,
				port: nextProps.wolInterface.port
			});
		}
	}

	render() {
		return (
			<RectBoxInner>
				<AppendBottom>
					<label>
						ip
					</label>
					<FormControl type="text"
						value={this.state.ip}
						onChange={e => {
							this.setState({
								ip: e.target.value
							});
						}} />
				</AppendBottom>
				<AppendBottom>
					<label>
						port
					</label>
					<FormControl type="text" bsSize="small"
						value={this.state.port}
						onChange={e => {
							this.setState({
								port: e.target.value
							});
						}} />
				</AppendBottom>
				<AppendRight>
					<Link to={this.props.getCancelLinkPath ? this.props.getCancelLinkPath() : ""}>
						<Button>
							Peruuta
						</Button>
					</Link>
				</AppendRight>
				<AppendRight>
					<Button bsStyle="danger"
						onClick={() => {
							this.props.removeWolInterface(this.props.wolInterface.id).then(() => {
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
						this.props.updateWolInterface({
							wolInterfaceId: this.props.wolInterface.id,
							ip: this.state.ip,
							port: this.state.port	
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
	graphql(WOL_INTERFACE_QUERY, {
		options: ({
			wolInterfaceId
		}) => ({
			variables: {
				wolInterfaceId
			}
		}),
		props: ({
			data: {
				loading,
				wolInterface
			}
		}) => ({
			loadingWolInterface: loading,
			wolInterface
		})
	}),
	graphql(UPDATE_WOL_INTERFACE_MUTATION, {
		props: ({ mutate }) => ({
			updateWolInterface: (params) => mutate({
				variables: {
					params
				}
			})
		})
	}),
	graphql(REMOVE_WOL_INTERFACE_MUTATION, {
		props: ({ mutate }) => ({
			removeWolInterface: (wolInterfaceId) => mutate({
				variables: {
					params: {
						wolInterfaceId
					}
				}
			})
		})
	})
)(UpdateWolInterface);