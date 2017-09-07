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

export class EditWolInterface extends React.Component {
	state = {
		mac: ""
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.wolInterface) {
			this.setState({
				mac: nextProps.wolInterface.mac
			});
		}
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

						}}>
						Poista
					</Button>
				</AppendRight>
				<Button bsStyle="success"
					onClick={() => {
						
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
	})
)(EditWolInterface);