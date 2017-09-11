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
	//AppendBottom
} from "../common/layout";

import {
	List,
	ListItem
} from "../common/list";

import SEARCH_COMPUTERS_QUERY from "./search_computers.graphql";

export class ComputersSearchResults extends React.Component {
	render() {
		return (
			<List>
				{this.props.computers.map(p => (
					<ListItem key={p.id}>
						<Link to={this.props.getItemLink ?
							this.props.getItemLink(p.id) : ""}>
							{p.name}
						</Link>
					</ListItem>
				))}
			</List>
		);
	}
}

export default compose(
	graphql(SEARCH_COMPUTERS_QUERY, {
		options : ({
			params
		}) => ({
			variables: {
				params
			},
			fetchPolicy: "cache-and-network"
		}),
		props: ({
			data: {
				computersConnection
			}
		}) => ({
			computers: computersConnection ? 
				computersConnection.computers: []
		})
	})
)(ComputersSearchResults);