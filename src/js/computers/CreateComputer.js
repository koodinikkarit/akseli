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

import CREATE_COMPUTER_MUTATION from "./create_computer.graphql";

export class CreateComputers extends React.Component {
	state = {
		name: ""
	}

	render() {
		return (
			<div>
				<RectBoxInner>
					<AppendBottom>
						<label>
							Nimi
						</label>
						<FormControl type="text"
							value={this.state.value}
							onChange={e => {
								this.setState({
									name: e.target.value
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
					<Button bsStyle="success"
						onClick={() => {
							this.props.createComputer({
								name: this.state.name
							}).then(() => {
								if (this.props.onCreate) {
									this.props.onCreate();
								}
							});
						}}>
						Tallenna
					</Button>
				</RectBoxInner>
			</div>
		);
	}
}

export default compose(
	graphql(CREATE_COMPUTER_MUTATION, {
		props: ({ mutate }) => ({
			createComputer: ({
				name
			}) => mutate({
				variables: {
					params: {
						name
					}
				}
			})
		})
	})
)(CreateComputers);