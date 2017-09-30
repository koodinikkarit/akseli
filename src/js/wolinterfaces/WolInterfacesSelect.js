import React from "react";
import {
	compose,
	graphql
} from "react-apollo";

import FormControl from "react-bootstrap/lib/FormControl";

import WOL_INTERFACES_QUERY from "./wolinterfaces_query.graphql";

export class WolInterfacesSelect extends React.Component {
	render() {
		return (
			<FormControl componentClass="select" placeholder="select"
				value={this.props.value}
				onChange={e => {
					if (this.props.onChange) {
						this.props.onChange(e.target.value);
					}
				}}>
				<option></option>
				{this.props.wolInterfaces.map(wolInterface => (
					<option key={wolInterface.id} value={wolInterface.id}>
						{wolInterface.ip}:{wolInterface.port}
					</option>
				))}
			</FormControl>
		);
	}
}

export default compose(
	graphql(WOL_INTERFACES_QUERY, {
		props: ({
			data: {
				wolInterfacesConnection
			}
		}) => ({
			wolInterfaces: wolInterfacesConnection ? wolInterfacesConnection.wolInterfaces : []
		})
	})
)(WolInterfacesSelect);