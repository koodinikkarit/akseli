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

import DelayTextInput from "../common/DelayTextInput";

import CREATE_WOL_INTERFACE_MUTATION from "./create_wol_interface.graphql";

export class CreateWolInterface extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mac: ""
		};
	}

	render() {
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
				<div>
					<AppendRight>
						<Link to={this.props.getCancelLinkPath ? this.props.getCancelLinkPath() : ""}>
							<Button>
								Peruuta
							</Button>
						</Link>
					</AppendRight>
					<Button bsStyle="success"
						onClick={() => {
							this.props.createWolInterface(this.state.mac).then(() => {
								if (this.props.onCreate) {
									this.props.onCreate();
								}
							});
						}}>
						Tallenna
					</Button>
				</div>
			</RectBoxInner>
		);
	}
}

export default compose(
	graphql(CREATE_WOL_INTERFACE_MUTATION, {
		props: ({ mutate }) => ({
			createWolInterface: (mac) => mutate({
				variables: {
					mac
				}
			})
		})
	})
)(CreateWolInterface);