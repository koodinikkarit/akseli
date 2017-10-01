import React from "react";
import {
	compose,
	graphql
} from "react-apollo";

import Table from "react-bootstrap/lib/Table";
import Button from "react-bootstrap/lib/Button";

import FETCH_COMPUTERS from "./fetch_computers.graphql";
import WAKEUP from "./wakeup.graphql";

export class WakeupTable extends React.Component {
	render() {
		return (
			<div style={{
				overflowX: "auto"
			}}>
				<Table striped bordered condensed>
					<thead>
						<tr>
							<td>
								Nimi
							</td>
							<td>
								Ip osoite
							</td>
							<td>
								Mac osoite
							</td>
							<td>
								Status
							</td>
						</tr>
					</thead>
					<tbody>
						{this.props.computers.map(computer => (
							<tr key={computer.id}>
								<td>
									{computer.name}
								</td>
								<td>
									{computer.ip}
								</td>
								<td>
									{computer.mac}
								</td>
								<td>
									{computer.awake === true ?
										<span style={{ color: "green" }}>Online</span> : 
										<span style={{ color: "red" }}>Offline</span>}
								</td>
								<td>
									<Button bsStyle="success"
										onClick={() => {
											this.props.wakeup(computer.id).then(() => {

											});
										}}>
										Herätä
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>	
			</div>
		);
	}
}

export default compose(
	graphql(FETCH_COMPUTERS, {
		props: ({
			data: {
				computersConnection
			}
		}) => ({
			computers: computersConnection ? computersConnection.computers : []
		})
	}),
	graphql(WAKEUP, {
		props: ({ mutate }) => ({
			wakeup: (computerId) => mutate({
				variables: {
					params: {
						computerId
					}
				}
			})
		})
	})
)(WakeupTable);