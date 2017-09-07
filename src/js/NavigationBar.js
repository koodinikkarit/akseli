import React from "react";
import {
	compose
} from "react-apollo";

import {
	Link
} from "react-router-dom";

import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import NavDropdown from "react-bootstrap/lib/NavDropdown";
import MenuItem from "react-bootstrap/lib/MenuItem";

export class NavigationBar extends React.Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">Akseli</Link>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavDropdown eventKey={1} title="Laitteet">
						<MenuItem eventKey={1.1}>
							<Link to="/computers">
								Tietokoneet
							</Link>
						</MenuItem>
						<MenuItem eventKey={1.2}>
							<Link to="/devices">
								Laitteet
							</Link>
						</MenuItem>
						<MenuItem eventKey={1.3}>
							<Link to="/woldevices">
								Wol
							</Link>
						</MenuItem>
					</NavDropdown>
					<NavDropdown eventKey={2} title="Asetukset">
					</NavDropdown>
				</Nav>
				<Nav pullRight>
					<NavItem eventKey={1} href="/login">Kirjaudu</NavItem>
				</Nav>
			</Navbar>
		);
	}
}

export default compose(

)(NavigationBar);