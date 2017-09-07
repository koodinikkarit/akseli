import React from "react";
import {
	compose,
	graphql
} from "react-apollo";

import {
	Link
} from "react-router-dom";

import {
	List,
	ListItem
} from "../common/list";

import WOL_INTERFACES_QUERY from "./wolinterfaces_query.graphql";

export class WolInterfacesSearchResults extends React.Component {
	render() {
		if (this.props.wolInterfacesLoading) {
			return <div />;
		} else {
			return (
				<div>
					<List>
						{this.props.wolInterfaces.map(p => (
							<ListItem key={p.id}>
								<Link to={this.props.getItemLink ? this.props.getItemLink(p.id) : ""}>
									{p.mac}
								</Link>
							</ListItem>
						))}
					</List>
				</div>
			);
		}
	}
}

export default compose(
	graphql(WOL_INTERFACES_QUERY, {
		options: () => {
			return {
				variables: {

				},
				fetchPolicy: "cache-and-network"
			};
		},
		props: ({
			data: {
				loading,
				wolInterfaces
			}
		}) => ({
			wolInterfacesLoading: loading,
			wolInterfaces: !loading ? wolInterfaces.wolInterfaces : []
		})
	})
)(WolInterfacesSearchResults);