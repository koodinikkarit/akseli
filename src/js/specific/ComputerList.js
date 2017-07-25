import React from "react";
import {
	graphql,
	compose
} from "react-apollo";

import ALL_COMPUTERS_QUERY from "./AllComputersQuery.graphql";

import { Link } from 'react-router-dom'

import ContainerList from "../common/containers/ContainerList";
import ContainerListRectItem from "../common/containers/ContainerListRectItem";

export class ComputerList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false
		}
	}
	
	render() {

		console.log("this.props", this.props);
		return (
			<div>
			<button onClick={e => {
				this.props.history.push("/createcomputer")
			}}>
				Lisää uusi tietokone
			</button>
			<ContainerList>
				{this.props.computers.map(computer => (
					<ContainerListRectItem id={computer.id}>
						<Link to="computer">
							{computer.name}
						</Link>
					</ContainerListRectItem>    
				))}
			</ContainerList>
			</div>
		)
	}
}

export default compose(
	graphql(ALL_COMPUTERS_QUERY, {
		props: ({ data: { 
			loading,
			allComputers
		}}) => ({
			loading,
			computers: !loading ? allComputers.computers : []
		})
	})
)(ComputerList);