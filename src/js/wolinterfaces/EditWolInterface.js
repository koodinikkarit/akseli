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
import EDIT_WOL_INTERFACE_MUTATION from "./edit_wol_interface.graphql";
import REMOVE_WOL_INTERFACE_MUTATION from "./remove_wol_interface.graphql";

export class EditWolInterface extends React.Component {
	state = {
		mac: this.props.wolInterface ? this.props.wolInterface.mac : ""
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.wolInterface) {
			this.setState({
				mac: nextProps.wolInterface.mac
			});
		}
	}

	render() {
		console.log("wolInterface", this.props.wolInterface);
		return (
			<RectBoxInner>
				<AppendBottom>
					<label>
						Mac osoite
					</label>
					<FormControl type="text"
						value={this.state.mac}
						onChange={e => {
							this.setState({
								mac: e.target.value
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
						this.props.editWolInterface(
							this.props.wolInterface.id,
							this.state.mac
						).then(() => {
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
	graphql(EDIT_WOL_INTERFACE_MUTATION, {
		props: ({ mutate }) => ({
			editWolInterface: (
				wolInterfaceId,
				mac
			) => mutate({
				variables: {
					wolInterfaceId,
					mac
				}
			})
		})
	}),
	graphql(REMOVE_WOL_INTERFACE_MUTATION, {
		props: ({ mutate }) => ({
			removeWolInterface: (
				wolInterfaceId
			) => mutate({
				variables: {
					wolInterfaceId
				}
			})
		})
	})
)(EditWolInterface);