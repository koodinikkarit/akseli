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

import Button from "react-bootstrap/lib/Button";
import Clearfix from "react-bootstrap/lib/Clearfix";

import WOL_INTERFACES_QUERY from "./wolinterfaces_query.graphql";
import WAKEUP_MUTATION from "./wakeup.graphql";

export class WolInterfacesSearchResults extends React.Component {
	render() {
		return (
			<div>
				<List>
					{this.props.wolInterfaces.map(p => (
						<ListItem key={p.id}>
							<Clearfix elementType="span">
								<div style={{
									float: "left"
								}}>
									<Link to={this.props.getItemLink ? this.props.getItemLink(p.id) : ""}>
										<div>
											{p.mac}
										</div>
									</Link>
								</div>

								<div style={{
									float: "right"
								}}>
									<Button
										onClick={() => {
											this.props.wakeup(p.id);
										}}>
										Herätä
									</Button>
								</div>
							</Clearfix>
						</ListItem>
					))}
				</List>
			</div>
		);
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
		}) => {
			return {
				wolInterfacesLoading: loading,
				wolInterfaces: wolInterfaces ? wolInterfaces.wolInterfaces : []
			};
		}
	}),
	graphql(WAKEUP_MUTATION, {
		props: ({ mutate }) => ({
			wakeup: (wolInterfaceId) => mutate({
				variables: {
					wolInterfaceId
				}
			})
		})
	})
)(WolInterfacesSearchResults);