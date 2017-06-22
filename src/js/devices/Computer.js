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
	TextInputGroup,
	SaveFormControl
} from "../form";


import Form from "react-bootstrap/lib/Form";
import Button from "react-bootstrap/lib/Button";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import {
	LayoutStyles
} from "../layout/";


export class Computer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newKey: "",
			newValue: ""
		}
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
						 computerId: this.props.computer.id,
						 name: value
					 })} />
					<h4>Arttu</h4>
					<h4>Wol</h4>
					<h4>Muut Tiedot</h4>
					<Row className={LayoutStyles.appendBottom}>
						<Col xs={5}>
							<strong>
								Avain
							</strong>
						</Col>
						<Col xs={5}>
							<strong>
								Arvo
							</strong>
						</Col>
					</Row>
					 {this.props.computer.deviceInfo && this.props.computer.deviceInfo.deviceInfo.keyValues.keyValues.map(p => (
						 <Row className={LayoutStyles.appendBottom}>
						 	<Col xs={5}>
							 	<SaveFormControl value={p.key}
									onChange={value => {
										this.props.editKeyValue({
											keyValueId: p.id,
											key: value
										})
									}} />
							</Col>
							<Col xs={5}>
								<SaveFormControl value={p.value}
									onChange={value => {
										this.props.editKeyValue({
											keyValueId: p.id,
											value: value
										})
									}} />
							</Col>
							<Col xs={1}>
								<Button bsStyle="danger"
									onClick={e => {
										this.props.removeKeyValue(p.id).then(res => {

										});
									}}>
									Poista
								</Button>
							</Col>
						 </Row>
					 ))}
					 <Row className={LayoutStyles.appendBottom}>
					 	<Col xs={5}>
						 	<SaveFormControl placeholder="Avain" value={this.state.newKey}
							 	onChange={value => {
									this.setState({
										newKey: value
									});
								}}/>
						</Col>
						<Col xs={5}>
							<SaveFormControl placeholder="Arvo" value={this.state.newValue} 
								onChange={value => {
									this.setState({
										newValue: value
									});
								}}/>
						</Col>
						<Col xs={1}>
							<Button bsStyle="success"
								onClick={e => {
									this.props.createKeyValue({
										deviceInfoId: this.props.computer.deviceInfo.deviceInfo.id,
										key: this.state.newKey,
										value: this.state.newValue
									}).then(data => {
										this.setState({
											newKey: "",
											newValue: ""
										});
									})
								}}>
								Lisää
							</Button>
						</Col>
					 </Row>
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
	query fetchComputerById($computerId: String!) {
		fetchComputerByIdResponse: fetchComputerById(computerId: $computerId){
			computer { 
				id
				name
				deviceInfo {
					deviceInfo {
						id
						keyValues {
							keyValues {
								id
								key
								value
							}
						}
					}
				}
			}
		}
	}`, {
		options: (ownProps) => {
			return {
				variables: {
					computerId: ownProps.match.params.id
				}
			}
		},
		props: ({ ownProps, data: { fetchComputerByIdResponse, loading } }) => ({
			computer: fetchComputerByIdResponse ? fetchComputerByIdResponse.computer : null,
			loading
		})
	}),
	graphql(gql`
	mutation editComputer($computerId: String!, $name: String, $arttuId: String, $deviceInfoId: String) {
		editComputer(computerId: $computerId, name: $name, arttuId: $arttuId, deviceInfoId: $deviceInfoId) {
			computer { 
				id
				name
			}
		}
	}`, {
		props: ({ ownProps, mutate }) => ({
			editComputer(props) {
				return mutate({
					variables: props
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
	}),
	graphql(gql`
	mutation createKeyValue($deviceInfoId: String!, $key: String, $value: String) {
		createKeyValue(deviceInfoId: $deviceInfoId, key: $key, value : $value) {
			keyValue {
				id
				key
				value
			}
		}	
	}`, {
		props: ({ ownProps, mutate }) => ({
			createKeyValue({
				deviceInfoId,
				key,
				value
			}) {
				return mutate({
					variables: {
						deviceInfoId,
						key,
						value
					},
					updateQueries: {
						keyValues
					}
				})
			}
		})
	}),
	graphql(gql`
	mutation editKeyValue($keyValueId: String!, $key: String, $value: String) {
		editKeyValue(keyValueId: $keyValueId, key: $key, value: $value) {
			keyValue {
				id
				key
				value
			}
		}	
	}`, {
		props: ({ ownProps, mutate }) => ({
			editKeyValue({
				keyValueId,
				key,
				value
			}) {
				return mutate({
					variables: {
						keyValueId,
						key,
						value
					}
				})
			}
		})
	}),
	graphql(gql`
	mutation removeKeyValue($keyValueId: String!) {
		removeKeyValue(keyValueId: $keyValueId) {
			state
		}	
	}`, {
		props: ({ ownProps, mutate }) => ({
			removeKeyValue(keyValueId) {
				return mutate({
					variables: {
						keyValueId
					}
				})
			}
		})
	})
)(Computer);