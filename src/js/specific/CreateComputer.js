import React from "react";
import {
	graphql,
	compose
} from "react-apollo";

import CREATE_COMPUTER_QUERY from "./CreateComputerMutation.graphql";

import ContainerListRectItem from "../common/containers/ContainerListRectItem";
import SaveFormControl from "../common/form/SaveFormControl";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Button from "react-bootstrap/lib/Button";

export class CreateComputer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ""
		}
	}

	render() {
		return (
			<ContainerListRectItem>
				<SaveFormControl placeholder="Nimi" value={this.state.name}
					onChange={value => {
						this.setState({
							name: value
						});
					}} />
				<Row>
					<Col xs={6}>
						<Button
							onClick={e => {
								this.props.history.push("/computers");
							}}>
							Peruuta
						</Button>
					</Col>
					<Col xs={6}>
						<Button
							onClick={e => {
								this.props.createComputer({
									name: this.state.name
								}).then(data => {
									this.props.history.push("/computers");
								});
							}}>
							Luo
						</Button>
					</Col>
				</Row>
			</ContainerListRectItem>
		)
	}
}


export default compose (
	graphql(CREATE_COMPUTER_QUERY, {
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
)(CreateComputer);